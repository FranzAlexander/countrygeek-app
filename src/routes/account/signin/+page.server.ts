import { backend_api } from '$lib/api';
import type { UserLoginResponse, UserSignIn } from '$lib/interfaces/user';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async (event) => {
		// Get form data.
		const data: FormData = await event.request.formData();

		const formValues = Array.from(data.entries()) as [keyof UserSignIn, string][];

		const userSignIn: UserSignIn = formValues.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {} as UserSignIn);

		const headers = { 'Content-Type': 'application/json' };

		const res = await fetch(`${backend_api}/login`, {
			method: 'POST',
			headers,
			body: JSON.stringify(userSignIn)
		});

		if (res.ok) {
			const result: UserLoginResponse = await res.json();
			event.cookies.set(
				'AuthorizationToken',
				`${result.auth_body.token_type} ${result.auth_body.access_token}`,
				{
					httpOnly: true,
					path: '/'
				}
			);
		} else {
			const errorResponse = { status: res.status, body: 'Sign In Failed' };
			return errorResponse;
		}
		throw redirect(302, '/');
	}
};
