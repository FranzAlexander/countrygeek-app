import type { DeviceRepairBooking, TestBooking } from '$lib/interfaces/booking';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async (event) => {
		// await fetch('http://127.0.0.1:3000/test_post', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify('Why Hello There!')
		// }).then((response) => console.log(response.body));
		// const data: FormData = await event.request.formData();
		// const booking: TestBooking = {
		// 	service_type: data.get('service_type') as number
		// };
		// const service_option = data.get('service_type') as number;
		// console.log(service_option);
	}
};
