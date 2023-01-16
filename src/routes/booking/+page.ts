import { createDeviceOptions } from '$lib/helpers/bookingHelper';
import type { DeviceRepairBooking, DeviceOptions } from '$lib/interfaces/booking';

// export let deviceRepair: DeviceRepairBooking;

export const load = async () => {
	let testOptions = [
		'Computer',
		'Laptop',
		'Mobile',
		'Printer',
		'Other',
		'Apple',
		'Microsoft',
		'Samsung',
		'HP',
		'Dell',
		'Other'
	];

	let deviceRepair: DeviceRepairBooking = {
		s_type: '',
		d_type: 'device',
		d_brand: '',
		d_description: '',
		user: { first_name: '', last_name: '', address: '' }
	};

	return {
		deviceRepair: deviceRepair,
		deviceOptions: createDeviceOptions(testOptions)
	};
};
