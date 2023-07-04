import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type {
	DatabaseCategoryWithSub,
	DatabaseSubCategory,
	ShopCategoryWithSub
} from '$lib/interfaces/category';
import type {
	AddSupplierInfo,
	ImageResponse,
	Spec,
	SpecValue,
	Supplier,
	SupplierLocation
} from '$lib/interfaces/admin';
import { createStripeProduct, supabaseAdmin } from '$lib/server/admin';
import { LOGNAME, PRIVATE_CLOUDFLARE_KEY } from '$env/static/private';

export const load: PageServerLoad = (async ({ locals: { supabase, getSession }, fetch }) => {
	const session = await getSession();
	const { data } = await supabase
		.from('profile')
		.select('is_admin')
		.eq('id', session?.user.id)
		.single();

	const is_admin = data !== null ? data.is_admin : false;

	if (!session || !is_admin) {
		throw redirect(307, '/admin');
	}

	const { data: brandData } = await supabase.from('brand').select('*');
	const brands =
		brandData !== null ? brandData.map((brand) => ({ id: brand.id, name: brand.name })) : [];

	const response = await fetch('/api/category', {
		method: 'GET',
		headers: { 'content-type': 'application/json' }
	});

	const categories = await response.json();

	const { data: supplierData } = await supabase.from('supplier').select('*, supplier_location(*)');
	const suppliers: Supplier[] =
		supplierData && Array.isArray(supplierData)
			? supplierData.map((supplier: { [x: string]: any }) => ({
					id: supplier.id,
					name: supplier.name,
					locations: supplier.supplier_location.map((supplierLocation: { [x: string]: any }) => ({
						id: supplierLocation.id,
						state: supplierLocation.state
					}))
			  }))
			: [];

	const { data: specData } = await supabase.from('spec').select('*');
	const specs: Spec[] =
		specData && Array.isArray(specData)
			? specData.map((spec: { [x: string]: any }) => ({
					id: spec.id,
					name: spec.name
			  }))
			: [];

	const { data: specValueData } = await supabase.from('spec_filter').select('*');

	const specValues: SpecValue[] =
		specValueData && Array.isArray(specValueData)
			? specValueData.map((specValue: { [x: string]: any }) => ({
					id: specValue.id,
					name: specValue.name
			  }))
			: [];

	return {
		session: getSession(),
		brands: brands,
		categories: categories,
		suppliers: suppliers,
		specs: specs,
		specValues: specValues
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, fetch }) => {
		const supabase = supabaseAdmin;

		const formData = await request.formData();

		const sku = formData.get('sku') as string;
		const productName = formData.get('productName') as string;
		const productDescription = formData.get('productDescription') as string;
		const productPrice = formData.get('productPrice');
		const warranty = formData.get('warranty');
		const model = formData.get('model') as string;
		const brand = formData.get('brand');
		const category = formData.get('category');
		const subCategory = formData.get('subCategory');
		const status = formData.get('status');
		const release = formData.get('release');
		const length = formData.get('length');
		const width = formData.get('width');
		const height = formData.get('height');
		const weight = formData.get('weight');

		const product_specs = Array.from(formData.entries())
			.filter(([key]) => key.startsWith('spec-id-'))
			.map(([key, value], i) => ({
				spec_id: Number(value),
				value: formData.get(`spec-value-${i}`)
			}));

		const product_filters = Array.from(formData.entries())
			.filter(([key]) => key.startsWith('spec-filter-id-'))
			.map(([key, value], i) => ({
				spec_id: Number(formData.get(`spec-filter-s-id-${i}`)),
				spec_filter_id: Number(value)
			}));

		const supplier_locations = Array.from(formData.entries())
			.filter(
				([key]) =>
					key.startsWith('supplier-') &&
					!key.includes('-loc-') &&
					!key.includes('-amount-') &&
					!key.includes('-code-') &&
					!key.includes('-price-')
			)
			.map(([key, value], i) => ({
				supplier_id: Number(value),
				supplier_price: Number(formData.get(`supplier-price-${i}`)),
				supplier_product_code: formData.get(`supplier-code-${i}`),
				locations: Array.from(formData.entries())
					.filter(([key]) => key.startsWith(`supplier-${i}-loc-`))
					.map(([key, value], j) => ({
						location_id: Number(value),
						quantity: Number(formData.get(`supplier-${i}-amount-${j}`))
					}))
			}));

		const { data } = await supabase.from('brand').select('name').eq('id', Number(brand)).single();

		const originalThumbnail: File = formData.get('thumbnail') as File;
		const thumbnail = new File(
			[originalThumbnail],
			`prod-${data?.name}=${model}-${0}${originalThumbnail.name.slice(
				originalThumbnail.name.lastIndexOf('.')
			)}`,
			{ type: originalThumbnail.type }
		);

		const originalImages: File[] = formData.getAll('productImages') as File[];
		const images = originalImages.map(
			(file, i) =>
				new File(
					[file],
					`prod-${data?.name}-${model}-${i}${file.name.slice(file.name.lastIndexOf('.'))}`,
					{
						type: file.type
					}
				)
		);

		const priceInCents = Math.round(Number(productPrice) * 100);

		const stripeId = await createStripeProduct(productName as string, priceInCents);

		// let i = 0;
		// while (formData.has(`spec-id-${i}`)) {
		// 	const specId = Number(formData.get(`spec-id-${i}`));
		// 	const value = formData.get(`spec-value-${i}`) as string;
		// 	const specValueId = Number(formData.get(`spec-value-id-${i}`));

		// 	specs.push({
		// 		specId,
		// 		value,
		// 		specValueId: specValueId === -1 ? null : specValueId
		// 	});

		// 	i++;
		// }

		// const currentSuppliers = [];
		// let index = 0;

		// while (formData.has(`supplier-${index}`)) {
		// 	const supplierLocations = [];
		// 	let ii = 0;

		// 	while (formData.has(`supplier-${index}-loc-${ii}`)) {
		// 		supplierLocations.push({
		// 			locationId: Number(formData.get(`supplier-${index}-loc-${ii}`)),
		// 			amount: Number(formData.get(`supplier-${index}-amount-${ii}`))
		// 		});
		// 		ii++;
		// 	}

		// 	currentSuppliers.push({
		// 		supplierId: Number(formData.get(`supplier-${index}`)),
		// 		supplierCode: formData.get(`supplier-code-${index}`) as string,
		// 		supplierPrice: Number(formData.get(`supplier-price-${index}`)),
		// 		supplierLocations
		// 	});
		// 	index++;
		// }
		// console.log(currentSuppliers);
		// console.log(specs);

		// const thumbnailVariantUrl = await uploadFileAndGetShopUrl(thumbnail, fetch);
		// const imageVariantUrls = await Promise.all(
		// 	images.map((image) => uploadFileAndGetShopUrl(image, fetch))
		// );

		// const { error: createProductError } = await supabase.rpc('create_product', {
		// 	_brand_id: Number(brand),
		// 	_category_id: Number(category),
		// 	_description: productDescription as string,
		// 	_featured: false,
		// 	_height: Number(height) * 100,
		// 	_images: imageVariantUrls,
		// 	_length: Number(length) * 100,
		// 	_model: model as string,
		// 	_name: productName as string,
		// 	_product_specs: JSON.stringify(specs),
		// 	_release_date: Date.parse(release as string),
		// 	_sku: sku as string,
		// 	_status: status as string,
		// 	_stripe_product_id: stripeId,
		// 	_subcategory_id: Number(subCategory),
		// 	_supplier_locations: JSON.stringify(currentSuppliers),
		// 	_thumbnail: thumbnailVariantUrl,
		// 	_warranty: warranty as string,
		// 	_weight: Number(weight) * 100,
		// 	_width: Number(width) * 100
		// });

		// if (createProductError) {
		// 	console.log('Error: ' + createProductError);
		// }

		// // const supplierInserts = currentSuppliers.flatMap((supplier) => {
		// // 	return supplier.supplierLocations.map((location) => ({
		// // 		supplier_id: supplier.supplierId,
		// // 		product_code: supplier.supplierCode,
		// // 		purchase_price: Math.round(Number(supplier.supplierPrice) * 100),
		// // 		amount: location.amount,
		// // 		product_id: sku as string, // Assuming sku is defined earlier in your function
		// // 		supplier_location_id: location.locationId
		// // 	}));
		// // });
	}
} satisfies Actions;

async function uploadFileAndGetShopUrl(
	file: File,
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<string | undefined> {
	try {
		const uploadForm = new FormData();
		uploadForm.append('file', file, file.name);
		uploadForm.append('requireSignedURLs', 'false'); // Or 'true' if you want signed URLs

		const response = await fetch(
			'https://api.cloudflare.com/client/v4/accounts/16bf1010b5054608c2c953df916eb077/images/v1',
			{
				method: 'POST',
				body: uploadForm,
				headers: {
					Authorization: `Bearer ${PRIVATE_CLOUDFLARE_KEY}`
				}
			}
		);

		if (!response.ok) {
			throw new Error(`Cloudflare upload failed: ${response.statusText}`);
		}

		const data: ImageResponse = await response.json();
		return data.result.variants.find((url) => url.includes('/shop'));
	} catch (error) {
		console.error('Error uploading file:', error);
		// Handle or throw error appropriately
	}
}
