import type { Actions } from '../$types';

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
