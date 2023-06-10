import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/category', {
		method: 'GET',
		headers: { 'content-type': 'application/json' }
	});

	const categories = await response.json();

	return { categories: categories };
}) satisfies LayoutLoad;
