import { backend_api } from '$lib/api';
import type { UserSignUp, NewUser } from '$lib/interfaces/user';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async (event) => {
		// Get form data.
		const data: FormData = await event.request.formData();

		const formValues = Array.from(data.entries()) as [keyof UserSignUp, string][];

		const userSignUp: UserSignUp = formValues.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {} as UserSignUp);

		if (userSignUp.password !== userSignUp.password_confirm) {
			return { status: 400, body: 'Passwords do not match' };
		}

		const headers = { 'Content-Type': 'application/json' };

		const currentDate = new Date();
		const format_date = `${currentDate.getFullYear()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getDate()}`;

		const new_user: NewUser = {
			firstname: userSignUp.first_name,
			lastname: userSignUp.last_name,
			email: userSignUp.email,
			password: userSignUp.password,
			date_created: format_date,
			date_updated: format_date,
			role: 'Customer'
		};

		const res = await fetch(`${backend_api}/register`, {
			method: 'POST',
			headers,
			body: JSON.stringify(new_user)
		});

		if (!res.ok) {
			const errorResponse = { status: res.status, body: 'Registration Failed' };
			return errorResponse;
		}

		const successResponse = { status: 200, body: 'Registration successful' };
		return successResponse;
	}
};
