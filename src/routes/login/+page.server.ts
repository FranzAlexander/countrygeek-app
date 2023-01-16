import { auth_service, post } from '$lib/api';
import type { UserLogin } from '$lib/interfaces/user';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ request }) => {
		const data: FormData = await request.formData();
		//let value: string = '';

		const user: UserLogin = {
			email: data.get('email') as string,
			password: data.get('password') as string
		};

		const res = await post(auth_service, 'login', user, '');
		console.log(res);
		// const response = await fetch('http://127.0.0.1:3001/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: 'application.json'
		// 	},
		// 	body: JSON.stringify(user)
		// });

		// if (response.ok || response.status === 422) {
		// 	const text = await response.text();
		// 	value = JSON.stringify(text);
		// }

		// const value = JSON.stringify(response.body);

		//	console.log(value);

		throw redirect(307, '/');
	}
};
