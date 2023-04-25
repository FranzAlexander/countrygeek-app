import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { User, UserAddress } from '$lib/interfaces/user';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	let userProfile: User | null = null;

	const { data: profile } = await supabase
		.from('user_profile')
		.select(`fullname, phone, user_address(street_address, city, postcode)`)
		.eq('id', session.user.id)
		.single();

	if (profile) {
		userProfile = { fullname: profile.fullname, phone: profile.phone, userAddress: [] };

		if (profile.user_address) {
			if (Array.isArray(profile.user_address)) {
				for (let i = 0; i < profile.user_address.length; i += 1) {
					userProfile.userAddress[i] = {
						streetAddress: profile.user_address[i].street_address,
						city: profile.user_address[i].city,
						postcode: profile.user_address[i].postcode
					};
				}
				if (profile.user_address.length === 0) {
					userProfile.userAddress[0] = {
						streetAddress: '',
						city: '',
						postcode: ''
					};
				}
			}
		}
	}

	return { session, userProfile };
}) satisfies PageServerLoad;

export const actions: Actions = {
	resetPassword: async ({ request, locals: { supabase } }) => {
		const errors: Record<string, unknown> = {};

		const formData = await request.formData();

		const newPassword = formData.get('newPassword') as string;

		if (newPassword === '') {
			errors.newPassword = 'Please enter the new password!';
			return fail(400, { data: Object.fromEntries(formData), errors });
		}

		const { error } = await supabase.auth.updateUser({ password: newPassword });

		if (error) {
			errors.server = 'Server error! Please try again later!';
			return fail(400, { data: Object.fromEntries(formData), errors });
		}

		return;
	},
	updatePersonalDetails: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const errors: Record<string, unknown> = {};

		const formData = await request.formData();

		const fullname = formData.get('fullname') as string;
		const phone = formData.get('phone') as string;

		if (fullname === '') {
			errors.fullname = 'Please enter your fullname';
		}

		if (phone === '') {
			errors.phone = 'Please enter your phone';
		}

		if (Object.entries(errors).length > 0) {
			const data = {
				data: Object.fromEntries(formData),
				errors
			};
			return fail(400, data);
		}

		const { error } = await supabase
			.from('user_profile')
			.update({ fullname, phone })
			.eq('id', session?.user.id);

		if (error) {
			errors.server = 'Server error! Please try again later!';
			return fail(400, { data: Object.fromEntries(formData), errors });
		}

		return;
	},
	updateAddressDetails: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();

		const errors: Record<string, unknown> = {};

		const formData = await request.formData();

		const country = formData.get('countries') as string;
		const streetAddress = formData.get('streetAddress') as string;
		const postcode = formData.get('postcode') as string;
		const state = formData.get('state') as string;
		const suburb = formData.get('suburb') as string;

		if (streetAddress === '') {
			errors.streetAddress = 'Please enter your address';
		}

		if (postcode === '') {
			errors.postcode = 'Please enter your postcode';
		}

		if (suburb === '') {
			errors.suburb = 'Please enter your suburb';
		}

		if (Object.entries(errors).length > 0) {
			const data = {
				data: Object.fromEntries(formData),
				errors
			};
			return fail(400, data);
		}

		const { error } = await supabase
			.from('user_address')
			.upsert({})
			.eq('profile_id', session?.user.id);
	}
};
