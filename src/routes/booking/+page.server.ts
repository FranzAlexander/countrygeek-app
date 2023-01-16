import type { DeviceRepairBooking } from '$lib/interfaces/booking';
import type { Actions } from './$types';

export const actions: Actions = {
	bookRepair: async (event) => {
		await fetch('http://127.0.0.1:3000/test_post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify('Why Hello There!')
		}).then((response) => console.log(response.body));
	}
};
