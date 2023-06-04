import type { Product } from '$lib/interfaces/shop';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const categoryName = decodeURIComponent(params.slug.replaceAll(/-/g, ' '));

	const { data: category } = await supabase
		.from('category')
		.select('id')
		.eq('name', categoryName)
		.single();

	if (!category) {
		return '';
	}

	const { data: productsResult } = await supabase
		.from('product')
		.select('*')
		.eq('category_id', category.id);

	if (!productsResult) {
		return '';
	}

	const productData: Product[] = productsResult?.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		price: product.price,
		categoryId: product.category_id,
		subCategoryId: product.sub_category_id,
		stripeProductId: product.stripe_product_id,
		brand: product.brand,
		model: product.model,
		status: product.status,
		images: product.images,
		thumbnail: product.thumbnail,
		sku: product.sku
	}));

	return { category: categoryName, products: productData };
}) satisfies PageServerLoad;
