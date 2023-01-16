import type { DeviceOptions } from '$lib/interfaces/booking';
import { element } from 'svelte/internal';

export function createDeviceOptions(p_data: string[]): DeviceOptions {
	const sIndex: number = p_data.findIndex((element) => element == 'Other');
	return { dTypes: p_data.slice(0, sIndex + 1), dBrands: p_data.slice(sIndex + 1, p_data.length) };
}
