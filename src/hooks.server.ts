import { backend_api } from '$lib/api';
import type { User } from '$lib/interfaces/user';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
	const token = event.cookies.get('AuthorizationToken');

	if (!token) {
		return await resolve(event);
	}

	if (!event.locals.user) {
		let headers: HeadersInit = { 'Content-Type': 'application/json' };

		if (!!token) {
			headers['Authorization'] = `${token}`;
		}

		const response = await fetch(`${backend_api}/get_user`, {
			method: 'GET',
			headers
		});

		const responseBody: User = await response.json();

		event.locals.user = { name: responseBody.firstname, role: responseBody.role };
	}

	return await resolve(event);
}) satisfies Handle;

// export const handle: Handle = async ({ event, resolve }) => {
// 	const cache = get(event.locals).cache;

// 	const token = event.cookies.AuthorizationToken;

// 	if (!token) {
// 		return await resolve(event);
// 	}

// 	const cachedResponse = await cache.get(token);

// 	if (cachedResponse) {
// 		return cachedResponse;
// 	}

// 	const headers: HeadersInit = { 'Content-Type': 'application/json' };

// 	if (!!token) {
// 		headers['Authorization'] = `${token}`;
// 	}

// 	const response = await fetch(`${backend_api}/get_user`, {
// 		method: 'GET',
// 		headers
// 	});

// 	const responseBody: User = await response.json();

// 	const userData = { name: responseBody.firstname, role: responseBody.role };

// 	user.set(userData);

// 	const responseWithUser = new Response(JSON.stringify(userData), {
// 		status: response.status,
// 		headers: response.headers
// 	});

// 	// Cache the response for 10 minutes
// 	cache.set(token, responseWithUser, { ttl: 600000 });

// 	return responseWithUser;
// };
