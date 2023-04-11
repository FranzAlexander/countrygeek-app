import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { User } from '$lib/interfaces/user';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	// let profile: User;

	// let response = await supabase
	// 	.from('user_profile')
	// 	.select(`fullname, phone, user_address(street_address, city, postcode)`)
	// 	.eq('id', session.user.id)
	// 	.returns<User>();

	// if (response.error) {
	// 	throw redirect(303, '/');
	// } else {
	// 	profile = response.data;
	// }

	const { data: profile } = await supabase
		.from('user_profile')
		.select(`fullname, phone, user_address(street_address, city, postcode)`)
		.eq('id', session.user.id)
		.single();

	return { session, profile };
}) satisfies PageServerLoad;
