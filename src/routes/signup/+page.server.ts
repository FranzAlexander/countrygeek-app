import type { UserSignUp, NewUser } from '$lib/interfaces/user';
import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/**
 * An object containing a set of actions for handling user sign-up.
 *
 * The available actions are:
 *
 * - `default`: an async function that handles the default sign-up action.
 *
 * @public
 */
export const actions: Actions = {
	/**
	 * An async function that handles the default sign-up action.
	 *
	 * This function takes in a `request` object, a `url` object, and a `supabase` object as parameters,
	 * and returns a `Promise` that resolves to an object containing either a success message or an error object.
	 *
	 * If the sign-up is successful, a message object will be returned with the message
	 * "Please check your email for a magic link to log into the website.".
	 *
	 * If there is an error during sign-up, an error object will be returned with the following properties:
	 * - `error`: a string representing the error message.
	 * - `values`: an optional object containing any form values that were submitted with the request.
	 *
	 * If the `email` or `password` fields are missing, the function will return a 400 error with the appropriate error message.
	 *
	 * If there is a server error during sign-up, the function will return a 500 error with the message "Server error. Try again later.".
	 *
	 * @param request - A request object containing the form data.
	 * @param url - The URL of the current request.
	 * @param supabase - A Supabase object for interacting with the Supabase auth API.
	 *
	 * @returns A Promise that resolves to an object containing either a success message or an error object.
	 *
	 * @public
	 */
	defaultSignUp: async ({ request, url, locals: { supabase } }) => {
		// Parse the form data
		const formData: FormData = await request.formData();

		// Convert the form data to a UserSignUp object
		const userSignUp: UserSignUp = {
			email: formData.get('email') as string,
			fullname: formData.get('fullname') as string,
			password: formData.get('password') as string
		};

		if (!userSignUp.fullname) {
			return fail(400, { error: 'Please enter your name' });
		}

		// Validate the form data
		if (!userSignUp.email) {
			return fail(400, { error: 'Please enter your email' });
		}

		if (!userSignUp.password) {
			return fail(400, {
				error: 'Please enter a password',
				values: { fullname: userSignUp.fullname, email: userSignUp.email }
			});
		}

		// Attempt to sign up the user with Supabase
		const { error } = await supabase.auth.signUp({
			email: userSignUp.email,
			password: userSignUp.password,
			options: {
				emailRedirectTo: url.origin,
				data: {
					fullname: userSignUp.fullname
				}
			}
		});

		// Handle any errors that occurred during sign-up
		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentails.',
					values: { email: userSignUp.email }
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.',
				values: { email: userSignUp.email }
			});
		}

		// If sign-up was successful, return a success message
		return {
			message: 'Please check your email for a magic link to log into the website.'
		};
	},

	facebookSignUp: async ({ locals: { supabase } }) => {
		const { error } = await supabase.auth.signInWithOAuth({ provider: 'facebook' });
		// Handle any errors that occurred during sign-up
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
	googleSignUp: async ({ locals: { supabase } }) => {
		console.log('Sign Up Google');

		const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
		console.log(error);

		// Handle any errors that occurred during sign-up
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
