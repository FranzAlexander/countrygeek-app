import { error, type RequestHandler } from '@sveltejs/kit';
import { supabaseClient } from '../../../lib/server/db';
import type { Product } from '../../../lib/interfaces/shop';

export const POST = (async ({ request }) => {
	const { categoryName } = await request.json();

	const { data: categoryId } = await supabaseClient
		.from('category')
		.select('id')
		.eq('name', categoryName)
		.single();

	if (!categoryId) {
		throw error(400, 'Category Not Found');
	}

	const { data: productResult } = await supabaseClient
		.from('product')
		.select('*')
		.eq('category_id', categoryId.id);

	if (!productResult) {
		throw error(400, 'No Products Found');
	}

	const productData: Product[] = productResult?.map((product) => ({
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

	return new Response(JSON.stringify(productData));
}) satisfies RequestHandler;
