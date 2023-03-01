import { backend_api } from '$lib/api';
import type { Category } from '$lib/interfaces/service';
import { selected_booking_info } from '$lib/stores';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	let response = await fetch(`${backend_api}/get_categories`);
	const categories: Category[] = await response.json();
	let types_response = await fetch(`${backend_api}/get_category_types`, {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: get(selected_booking_info)
	});
	console.log(categories);
	return { categories };
}) satisfies PageLoad;
