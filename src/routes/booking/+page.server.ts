import { backend_api } from '$lib/api';
import type { Category, CategoryId, ServiceTypes } from '$lib/interfaces/service';
import { selected_booking_info } from '$lib/stores';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async ({ fetch }) => {
	// let response = await fetch(`${backend_api}/get_categories`);
	// const categories: Category[] = await response.json();
	// let cat_id: CategoryId = {
	// 	category_id: get(selected_booking_info).service_category_id
	// };
	// console.log(JSON.stringify(cat_id));
	// let types_response = await fetch(`${backend_api}/get_category_types`, {
	// 	method: 'POST',
	// 	mode: 'cors',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(cat_id)
	// })
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));
	// //const cat_text = await types_response.json();
	// // const category_types: ServiceTypes = await types_response.json();
	// // console.log(categories);
	// // console.log(types_response);
	// return { categories };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const service_category = data.get('service_category');
		console.log(service_category);

		throw redirect(301, '/');
	}
} satisfies Actions;
