import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Booking } from '$lib/interfaces/booking';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: booking } = await supabase
		.from('booking')
		.select('*,booking_status(status)')
		.eq('profile_id', session?.user.id);

	let userBookings: Booking[] = [];

	if (booking) {
		for (let i = 0; i < booking.length; i += 1) {
			userBookings[i] = {
				id: booking[i].id,
				description: booking[i].description,
				categoryName: booking[i].category_name,
				serviceName: booking[i].service_name,
				date: booking[i].date === null ? 'Yet to be set!' : booking[i].date,
				status: ''
			};

			const bookingStatus = booking[i].booking_status;

			if (bookingStatus) {
				if (!Array.isArray(bookingStatus) && bookingStatus.status) {
					userBookings[i].status = bookingStatus.status;
				}
			}
		}
	}

	return { session, userBookings };
}) satisfies PageServerLoad;
