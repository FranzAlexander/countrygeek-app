import { writable, type Writable } from 'svelte/store';
import type { BookingOptions } from './interfaces/booking';
import type { UserSession, AuthBody } from './interfaces/user';

export const user_session = writable<UserSession>({
	first_name: '',
	session_id: '',
	token: { access_token: '', token_type: '' }
});

export const selected_booking_info: Writable<BookingOptions> = writable({
	service_category: '',
	service_type: ''
});
