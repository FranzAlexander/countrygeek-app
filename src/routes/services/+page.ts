import { auth_service, backend_api, get } from '$lib/api';
import type { PageLoad } from '../$types';

export const load = (async ({ fetch }) => {
	let response = await fetch(`${backend_api}/allservices`);
	const all_services = await response.json();
	return {
		all_services
	};
}) satisfies PageLoad;
