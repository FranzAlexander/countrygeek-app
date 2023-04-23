import type { SelectedService } from '$lib/interfaces/service';
import type { User, UserAddress } from '$lib/interfaces/user';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession }, url }) => {
	const session = await getSession();

	let userDetails: User | null = null;

	const selectedService: SelectedService = {
		categoryName: url.searchParams.get(decodeURIComponent('c')),
		serviceName: url.searchParams.get(decodeURIComponent('s'))
	};

	if (session) {
		const { data: profile } = await supabase
			.from('user_profile')
			.select('fullname, phone, user_address(street_address, city, postcode)')
			.eq('id', session.user.id)
			.single();

		if (profile) {
			userDetails = { fullname: profile.fullname, phone: profile.phone, userAddress: [] };

			if (profile.user_address) {
				if (Array.isArray(profile.user_address)) {
					for (let i = 0; i < profile.user_address.length; i += 1) {
						userDetails.userAddress[i] = {
							streetAddress: profile.user_address[i].street_address,
							city: profile.user_address[i].city,
							postcode: profile.user_address[i].postcode
						};
					}
					if (profile.user_address.length === 0) {
						userDetails.userAddress[0] = {
							streetAddress: '',
							city: '',
							postcode: ''
						};
					}
				}
			}
		}
	}

	return { session, selectedService, userDetails };
}) satisfies PageServerLoad;

export const actions: Actions = {
	async default({ request, locals: { supabase, getSession } }) {
		// const session = await getSession();
		const formData = await request.formData();
		// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const categoryName = formData.get('categoryName') as string;
		const serviceName = formData.get('serviceName') as string;
		const bookingDescription = formData.get('bookingDescription') as string;
		const fullname = formData.get('fullname') as string;
		// const email = formData.get('email') as string;
		// const phone = formData.get('phone') as string;
		// const streetAddress = formData.get('streetAddress') as string;
		// const city = formData.get('city') as string;
		// const postcode = formData.get('postcode') as string;
		let stepError = 0;
		const errors: Record<string, unknown> = {};
		if (bookingDescription === '') {
			stepError = 1;
			errors.description = 'required';
		}
		if (fullname === '') {
			stepError = stepError !== 1 ? 2 : stepError;
			errors.fullname = 'required';
		}
		// if (email === '') {
		// 	stepError = stepError !== 1 ? 2 : stepError;
		// 	errors.email = 'required';
		// }
		// if (phone === '') {
		// 	stepError = stepError !== 1 ? 2 : stepError;
		// 	errors.phone = 'required';
		// }
		// if (!emailRegex.test(email)) {
		// 	if (stepError !== 1) {
		// 		stepError = 2;
		// 	}
		// 	errors.email = 'Please enter a valid email!';
		// }
		// if (streetAddress === '') {
		// 	if (stepError !== 2 && stepError !== 1 && stepError === 0) {
		// 		stepError = 3;
		// 	}
		// 	errors.streetAddress = 'Street address is required!';
		// }
		// if (city === '') {
		// 	if (stepError !== 2 && stepError !== 1 && stepError === 0) {
		// 		stepError = 3;
		// 	}
		// 	errors.city = 'City is required!';
		// }
		// if (postcode === '') {
		// 	if (stepError !== 2 && stepError !== 1 && stepError === 0) {
		// 		stepError = 3;
		// 	}
		// 	errors.postcode = 'Postcode is required!';
		// }
		if (Object.entries(errors).length > 0) {
			const data = {
				data: Object.fromEntries(formData),
				errors,
				stepError
			};
			return fail(400, data);
		}
		// let profileId: string | null;
		// if (session) {
		// 	profileId = session.user.id;
		// } else {
		// 	profileId = null;
		// }
		// Check Email
		// if (!email) {
		// 	return fail(400, { error: 'Please enter your email!', step: 2 });
		// } else {
		// 	if (!emailRegex.test(email)) {
		// 		return fail(400, { error: 'Please enter a valid email!', step: 2 });
		// 	}
		// }
		// supabase.from('booking').insert([
		// 	{
		// 		category_name: categoryName,
		// 		service_name: serviceName,
		// 		description: bookingDescription,
		// 		full_name: fullname,
		// 		email: email,
		// 		phone: phone,
		// 		street_address: streetAddress,
		// 		city: city,
		// 		postcode: postcode,
		// 		profile_id: profileId,
		// 		booking_status: 1
		// 	}
		// ]);
	}
};
