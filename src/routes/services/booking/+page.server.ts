import type { SelectedService } from '$lib/interfaces/service';
import type { User, UserAddress } from '$lib/interfaces/user';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession }, url }) => {
	const session = await getSession();

	let userDetails: any;

	const selectedService: SelectedService = {
		categoryName: url.searchParams.get(decodeURIComponent('c')),
		serviceName: url.searchParams.get(decodeURIComponent('s'))
	};

	if (session) {
		const { data: user } = await supabase
			.from('user_profile')
			.select('fullname, phone, user_address(street_address, city, postcode)')
			.eq('id', session.user.id)
			.single();

		userDetails = user;
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
		const streetAddress = formData.get('streetAddress') as string;
		const city = formData.get('city') as string;
		const postcode = formData.get('postcode') as string;

		let profileId: string | null;

		if (session) {
			profileId = session.user.id;
		} else {
			profileId = null;
		}

		supabase.from('booking').insert([
			{
				category_name: categoryName,
				service_name: serviceName,
				description: bookingDescription,
				full_name: fullname,
				email: email,
				phone: phone,
				street_address: streetAddress,
				city: city,
				postcode: postcode,
				profile_id: profileId
			}
		]);
	}
};
