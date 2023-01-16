import type { User } from './user';

export interface DeviceRepairBooking {
	s_type: string;
	d_type: string;
	d_brand: string;
	d_description: string;
	user: User;
}

// Hold data from web eapi.
export interface DeviceOptions {
	dTypes: string[];
	dBrands: string[];
}
