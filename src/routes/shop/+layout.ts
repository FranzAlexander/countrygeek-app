import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/category', {
		method: 'GET',
		headers: { 'content-type': 'application/json' }
	});

	const cartResponse = await fetch('/api/cart', {
		method: 'GET'
	});

	const cartItems = await cartResponse.json();

	const categories = await response.json();

	return { categories: categories, cart: cartItems };
}) satisfies LayoutLoad;
