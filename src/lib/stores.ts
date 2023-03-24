import { writable, type Writable } from 'svelte/store';
import type { BookingOptions } from './interfaces/booking';
import type { Services } from './interfaces/service';
import type { UserSession, AuthBody, User } from './interfaces/user';

export const user = writable<User>({
	firstname: '',
	role: ''
});

export const setUser = (newUser: User) => {
	user.set(newUser);
};

export const selected_booking_info: Writable<BookingOptions> = writable({
	service_category: '',
	service_category_id: 0,
	service_type: ''
});

// export const service_store: Writable<Services[]> = writable([
// 	{
// 		service_category: { category_id: 0, category: '' },
// 		service_types: [{ type_id: 0, s_type: '', description: '' }]
// 	}
// ]);
