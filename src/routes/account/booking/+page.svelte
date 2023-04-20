<script lang="ts">
	import type { Booking } from '$lib/interfaces/booking';
	import type { PageData } from './$types';

	export let data: PageData;

	let userBookings: Booking[] = [];

	if (data.userBookings) {
		userBookings = data.userBookings;
	}
</script>

<section class="flex min-h-full flex-col gap-2 rounded bg-country-geek-white p-2">
	<table>
		<thead>
			<tr class="border-b-2 font-semibold">
				<th class="px-6 py-3">Booking No</th>
				<th class="px-6 py-3">Category Name</th>
				<th class="px-6 py-3">Service Name</th>
				<th class="px-6 py-3">Date</th>
				<th class="px-6 py-3">Status</th>
			</tr>
		</thead>

		{#each userBookings as booking}
			<tbody>
				<tr>
					<td class="px-6 py-3 text-center">{booking.id}</td>
					<td class="px-6 py-3 text-center">{booking.categoryName}</td>
					<td class="px-6 py-3 text-center">{booking.serviceName}</td>
					<td class="px-6 py-3 text-center">{booking.date}</td>
					<td class="px-6 py-3 text-center">{booking.status}</td>
				</tr>
			</tbody>
		{/each}
	</table>
</section>
