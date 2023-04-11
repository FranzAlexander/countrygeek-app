import { backend_api } from '$lib/api';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { AuthApiError } from '@supabase/supabase-js';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		// Get form data.
		const formData: FormData = await request.formData();

		// const formValues = Array.from(formData.entries()) as [keyof UserSignIn, string][];

		const userEmail: string = formData.get('email') as string;
		const userPassword: string = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email: userEmail,
			password: userPassword
		});

		// Handle any errors that occurred during sign-up
		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentails.',
					values: { email: userEmail }
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.',
				values: { email: userEmail }
			});
		}

		throw redirect(302, `${url.origin}/logging-in`);
		// const userSignIn: UserSignIn = formValues.reduce((acc, [key, value]) => {
		// 	acc[key] = value;
		// 	return acc;
		// }, {} as UserSignIn);

		// const headers = { 'Content-Type': 'application/json' };

		// const res = await fetch(`${backend_api}/login`, {
		// 	method: 'POST',
		// 	headers,
		// 	body: JSON.stringify(userSignIn)
		// });

		// if (res.ok) {
		// 	const result: UserLoginResponse = await res.json();
		// 	event.cookies.set(
		// 		'AuthorizationToken',
		// 		`${result.auth_body.token_type} ${result.auth_body.access_token}`,
		// 		{
		// 			httpOnly: true,
		// 			path: '/'
		// 		}
		// 	);
		// } else {
		// 	const errorResponse = { status: res.status, body: 'Sign In Failed' };
		// 	return errorResponse;
		// }
		// throw redirect(302, '/');
	}
};
