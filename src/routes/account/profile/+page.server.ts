import { redirect } from '@sveltejs/kit';
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
	resetPassword: async ({ request, locals: { supabase } }) => {},
	updatePersonalDetails: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		console.log(formData);
		// supabase.from('user_profile').update();
	}
};
