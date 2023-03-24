import { backend_api } from '$lib/api';
import type { Services } from '$lib/interfaces/service';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ fetch }) => {
	let response = await fetch(`${backend_api}/get_services`);
	let services: Services[] = await response.json();

	return { services };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		console.log(data.get('category_id'));
	}
} satisfies Actions;
