import { backend_api } from '$lib/api';
import type { PageLoad } from '../$types';

export const load = (async ({ fetch }) => {
	let response = await fetch(`${backend_api}/get_categories`);
	const categories = await response.json();
	let types_response = await fetch(`${backend_api}/get_service_types`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ category_id: 1 })
	});
	const category_types = await types_response.json();
	return {
		categories,
		category_types
	};
}) satisfies PageLoad;
