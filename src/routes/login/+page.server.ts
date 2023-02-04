import { auth_service, post } from '$lib/api';
import type { UserLogin, UserSession, UserLoginResponse } from '$lib/interfaces/user';
import { user_session } from '$lib/stores';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageServerLoad, Actions } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async (event) => {
	if (get(user_session).session_id) {
		throw redirect(302, '/');
	}
};

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async (event) => {
		// Get form data.
		const data: FormData = await event.request.formData();

		// Create new UserLogin object.
		const user: UserLogin = {
			email: data.get('email') as string,
			password: data.get('password') as string
		};

		// Send user login data to backend server and get response.
		const res: UserLoginResponse = await post(auth_service, 'login', user, '');

		// Set JWT in cookie
		// event.cookies.set(
		// 	'AuthToken',
		// 	JSON.stringify(`${res.auth_body.token_type} ${res.auth_body.access_token}`),
		// 	{ httpOnly: true, path: '/' }
		// );

		// Set some user info in store for state management.
		user_session.set({
			first_name: res.first_name,
			session_id: res.session_id,
			token: res.auth_body
		});

		// Redirect.
		throw redirect(307, '/');
	}
};
