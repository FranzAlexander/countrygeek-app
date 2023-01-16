import type { DeviceRepairBooking } from './interfaces/booking';

export async function PostBooking(endpoint: string, data: DeviceRepairBooking) {
	await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(data)
	}).then(
		(response) => response.json()
		// console.log(JSON.stringify(data));
	);
}
