import { supabaseClient } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { ProductDisplay } from '$lib/interfaces/shop';

export const POST = (async ({ request }) => {
	const { categoryName } = await request.json();

	const { data: categoryId } = await supabaseClient
		.from('category')
		.select('id')
		.eq('name', categoryName)
		.single();

	if (!categoryId) {
		throw error(400, 'Category Not Found!');
	}

	const { data: productResult } = await supabaseClient
		.from('product')
		.select('*')
		.eq('category_id', categoryId.id);

	if (!productResult) {
		throw error(400, 'No Products Found');
	}

	const productData: ProductDisplay[] = productResult?.map((product) => ({
		sku: product.sku,
		name: product.name,
		price: (product.price / 100).toFixed(2),
		thumbnail: product.thumbnail,
		model: product.model,
		rating: Array.isArray(product.product_analytics)
			? String(product.product_analytics[0]?.rating)
			: String(product.product_analytics?.rating)
	}));

	return new Response(JSON.stringify(productData));
}) satisfies RequestHandler;
