<script lang="ts">
	import type { Booking } from '$lib/interfaces/booking';
	import type { PageData } from './$types';

	export let data: PageData;

	let userBookings: Booking[] = [];

	if (data.booking) {
		const booking = data.booking;
		userBookings[0].categoryName = booking[0].category_name;
		userBookings[0].serviceName = booking[0].service_name;
		userBookings[0].description = booking[0].description;

		if (!booking[0].date) {
			userBookings[0].date = 'Date to be confirmed';
		} else {
			userBookings[0].date = booking[0].date;
		}
	}
</script>

<section>
	{#each userBookings as booking}
		<div>
			<p>{booking.categoryName}</p>
			<p>{booking.serviceName}</p>
			<p>{booking.description}</p>
			<p>{booking.date}</p>
		</div>
	{/each}
</section>
