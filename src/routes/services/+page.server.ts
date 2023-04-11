import type { Services } from '$lib/interfaces/service';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	// const { data: response } = await supabase.from('service_category').select(
	// 	`id, category_name, category_image_url,
	// 		sub_service (
	// 			id,
	// 			sub_service_name,
	// 			service_description
	// 		)`
	// );
	// console.log(response);
	const { data: response } = await supabase
		.from('service_category')
		.select(
			`id, category_name, category_image_url,
			sub_service (
				id,
				sub_service_name,
				service_description
			)`
		)
		.order('list_order')
		.returns<Services[]>();

	return { session, response };
}) satisfies PageServerLoad;

export const actions: Actions = {
	async default({ request, url, locals: { supabase, getSession } }) {
		// const formData = Object.fromEntries(await request.formData());
		const formData = await request.formData();
		// for (let i of formData.values()) {
		// 	console.log(i);
		// }

		const categoryName = formData.get('serviceCategory') as string;
		const serviceName = formData.get('subServuce') as string;
		const bookingDescription = formData.get('booking_description') as string;
		const fullname = formData.get('fullname') as string;
		const email = formData.get('email') as string;
		const phone = formData.get('phone') as string;
		const streetAddress = formData.get('address') as string;
		const city = formData.get('city') as string;

		// console.log(email);
		let session = await getSession();
		if (!session) {
			let result = await supabase
				.from('booking')
				.insert({
					category_name: categoryName,
					service_name: serviceName,
					description: bookingDescription,
					full_name: fullname,
					email: email,
					phone,
					street_address: streetAddress,
					city
				})
				.single();

			console.log(result);

			if (!result.error) {
			}
		} else {
			console.log('NOPE');
		}
	}
};
