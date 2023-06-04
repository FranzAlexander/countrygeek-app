import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const categoryName = decodeURIComponent(params.slug.replaceAll(/-/g, ' '));

	const response = await fetch('/api/product', {
		method: 'POST',
		body: JSON.stringify({ categoryName }),
		headers: {
			'content-type': 'application/json'
		}
	});

	const products = await response.json();

	return { products: products };
}) satisfies PageLoad;
