import type { Product } from '$lib/interfaces/shop';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const productSku = decodeURIComponent(params.product.replaceAll(/-/g, ' ')).slice(-8);

	const response = await fetch('/api/getallproducts', {
		method: 'POST',
		body: JSON.stringify(productSku),
		headers: { 'content-type': 'application/json' }
	});

	const product: Product = await response.json();

	return { product: product };
}) satisfies PageLoad;
