import type { UserSignUp } from '$lib/interfaces/user';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async (event) => {
		// Get form data.
		const data: FormData = await event.request.formData();

		// Create new UserSignUp object.
		const user_sign_up: UserSignUp = {
			first_name: data.get('first_name') as string,
			last_name: data.get('last_name') as string,
			email: data.get('email') as string,
			email_confirm: data.get('email_confirm') as string,
			password: data.get('password') as string,
			password_confirm: data.get('password_confirm') as string,
			tnc: data.get('tnc-checked') as string
		};
		console.log(user_sign_up);

		if (user_sign_up.email !== user_sign_up.email_confirm) {
			return fail(400);
		}

		if (user_sign_up.password !== user_sign_up.password_confirm) {
			return fail(400);
		}
	}
};
