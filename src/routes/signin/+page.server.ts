import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { AuthApiError, type Provider } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';

const OAUTH_PROVIDERS = ['google', 'facebook'];

export const load: PageServerLoad = (async ({ locals: { getSession } }) => {
	return {
		session: getSession()
	};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	login: async ({ request, url, locals: { supabase } }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, { message: 'Provider not supported!' });
			}
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: provider
			});

			if (error) {
				return fail(400, { message: 'Something went wrong' });
			}
			throw redirect(303, data.url);
		}

		// Get form data.
		const formData: FormData = await request.formData();

		// const formValues = Array.from(formData.entries()) as [keyof UserSignIn, string][];

		const userEmail: string = formData.get('email') as string;
		const userPassword: string = formData.get('password') as string;

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (!emailRegex.test(userEmail)) {
			return fail(400, { error: 'Please enter valid email!' });
		}

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
	},
	facebookSignIn: async ({ locals: { supabase } }) => {
		const { error } = await supabase.auth.signInWithOAuth({ provider: 'facebook' });

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'User already signed up.'
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.'
			});
		}
	},
	googleSignIn: async ({ locals: { supabase } }) => {
		const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'User already signed up.'
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.'
			});
		}
	}
};
