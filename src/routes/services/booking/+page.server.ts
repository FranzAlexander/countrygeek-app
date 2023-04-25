import type { SelectedService } from '$lib/interfaces/service';
import type { User, UserAddress } from '$lib/interfaces/user';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { validateAddressDetails, validatePersonalDetails } from '$lib/server/validation';

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
		const session = await getSession();
		const formData = await request.formData();

		const categoryName = formData.get('categoryName') as string;
		const serviceName = formData.get('serviceName') as string;
		const bookingDescription = formData.get('bookingDescription') as string;
		const fullname = formData.get('fullname') as string;
		const email = formData.get('email') as string;
		const phone = formData.get('phone') as string;
		const country = formData.get('countries') as string;
		const streetAddress = formData.get('streetAddress') as string;
		const suburb = formData.get('suburb') as string;
		const state = formData.get('state') as string;
		const postcode = formData.get('postcode') as string;

		let stepError = 0;
		const errors: Record<string, unknown> = {};
		if (bookingDescription === '') {
			stepError = 1;
			errors.description = 'This field is required!';
		}
		let personalStep = await validatePersonalDetails(fullname, email, phone, errors);
		if (personalStep === 2) {
			stepError = stepError !== 1 ? 2 : stepError;
		}

		let addressStep = await validateAddressDetails(streetAddress, postcode, suburb, errors);
		if (addressStep === 3) {
			stepError = stepError !== (1 || 2) ? 3 : stepError;
		}

		if (Object.entries(errors).length > 0) {
			const data = {
				data: Object.fromEntries(formData),
				errors,
				stepError
			};
			return fail(400, data);
		}

		let profileId: string | null;
		if (session) {
			profileId = session.user.id;
		} else {
			profileId = null;
		}

		const { error } = await supabase.from('booking').insert([
			{
				category_name: categoryName,
				service_name: serviceName,
				description: bookingDescription,
				full_name: fullname,
				email: email,
				phone: phone,
				street_address: streetAddress,
				city: suburb,
				postcode: postcode,
				country: country,
				state: state,
				profile_id: profileId,
				booking_status: 1
			}
		]);

		if (error) {
			errors.server = 'Server error! Please try again later!';
			stepError = 4;
			return fail(500, {
				data: Object.fromEntries(formData),
				errors,
				stepError
			});
		}

		throw redirect(302, '/');
	}
};
