import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
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

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (!emailRegex.test(userEmail)) {
			return fail(400, { error: 'Please enter valid email!' });
		}

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
	}
};
