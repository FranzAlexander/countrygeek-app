import type { Product, ProductPayload } from '$lib/interfaces/product';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const rawParam = params.product;
	const productSku: ProductPayload = {
		productSku: decodeURIComponent(rawParam.replaceAll(/-/g, ' ')).slice(-8)
	};

	const response = await fetch('/api/product', {
		method: 'POST',
		body: JSON.stringify(productSku),
		headers: { 'content-type': 'application/json' }
	});

	const product: Product = await response.json();

	return { product: product };
}) satisfies PageLoad;
