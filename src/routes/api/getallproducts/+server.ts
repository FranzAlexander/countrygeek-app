import { supabaseClient } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Product, ProductSpec, ProductSupplier } from '$lib/interfaces/shop';

export const POST = (async ({ request }) => {
	const productSku: string = await request.json();

	const { data: productData } = await supabaseClient
		.rpc('get_product_by_id', {
			p_sku: productSku
		})
		.single();

	if (!productData) {
		throw error(400, 'product not found');
	}

	const product: Product = {
		sku: (productData as Product).sku,
		name: (productData as Product).name,
		description: (productData as Product).description,
		price: (((productData as Product).price as number) / 100).toFixed(2),
		stripe_product_id: (productData as Product).stripe_product_id,
		brand_name: (productData as Product).brand_name,
		model: (productData as Product).model,
		status: (productData as Product).status,
		images: (productData as Product).images,
		thumbnail: (productData as Product).thumbnail,
		warranty: (productData as Product).warranty,
		specs: (productData as Product).specs,
		suppliers: (productData as Product).suppliers
	};

	return new Response(JSON.stringify(product));
}) satisfies RequestHandler;
