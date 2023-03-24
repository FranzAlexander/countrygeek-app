import { backend_api } from '$lib/api';
import type { ProfileDetails } from '$lib/interfaces/user';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ fetch, cookies }) => {
	let headers: HeadersInit = { 'Content-Type': 'application/json' };
	const token = cookies.get('AuthorizationToken');

	if (!!token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	const res = await fetch(`${backend_api}/get_user_profile`, {
		method: 'GET',
		headers
	});

	if (res.ok) {
		const body: ProfileDetails = await res.json();

		return { personalDetails: body };
	}
}) satisfies PageServerLoad;
