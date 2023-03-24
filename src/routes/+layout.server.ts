import { backend_api } from '$lib/api';
import type { User } from '$lib/interfaces/user';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch, cookies }) => {
	let headers: HeadersInit = { 'Content-Type': 'application/json' };
	const token = cookies.get('AuthorizationToken');
	if (!!token) {
		if (token) {
			headers['Authorization'] = `${token}`;
		}

		const res = await fetch(`${backend_api}/get_user`, {
			method: 'GET',
			headers
		});

		console.log('hi');

		if (res.ok) {
			const responseBody: User = await res.json();
			return { user: responseBody };
		}
	}
}) satisfies LayoutServerLoad;
