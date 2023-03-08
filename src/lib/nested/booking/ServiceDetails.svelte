<script lang="ts">
	import type { BookingOptions } from '$lib/interfaces/booking';
	import type { Category, Services, ServiceTypes } from '$lib/interfaces/service';
	import { selected_booking_info, service_store } from '$lib/stores';

	let booking_options: BookingOptions = $selected_booking_info;
	let selected_service_info: Services[] = $service_store;

	export let categories: string[];
</script>

<div class="flex flex-col gap-5 text-white p-2">
	<h2 class="text-3xl border-b-2 border-country-geek-gold">Service Details</h2>
	<div class="flex flex-col gap-5">
		<h3 class="text-xl">Service Category:</h3>
		<div class="flex justify-evenly">
			{#each categories as category (category)}
				<div>
					<input
						type="radio"
						name="service_category"
						id={category}
						bind:group={booking_options.service_category}
						value={category}
						class="hidden peer"
					/>
					<label
						for={category}
						class="cursor-pointer p-2 rounded-md bg-neutral-800 peer-checked:bg-gradient-to-r from-cyan-500  to-country-geek-light-purple"
						>{category}</label
					>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-5">
		<h3 class="text-xl">Service Type:</h3>
		<div class="flex justify-evenly">
			{#each selected_service_info[booking_options.service_category_id - 1].service_types as serv_type}
				<div>
					<input
						type="radio"
						name="service_type"
						id={serv_type.s_type}
						bind:group={booking_options.service_type}
						value={serv_type.s_type}
						class="hidden peer"
					/>
					<label
						for={serv_type.s_type}
						class="cursor-pointer p-2 rounded-md bg-neutral-800 peer-checked:bg-gradient-to-r from-cyan-500  to-country-geek-light-purple"
						>{serv_type.s_type}</label
					>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-5">
		<label for="" class="text-xl">Brief Description:</label>
		<textarea name="" id="" cols="30" rows="10" class="bg-neutral-900 " />
	</div>
	<div class="flex flex-col gap-5">
		<label for="" class="text-xl">Date:</label>
		<input type="date" name="" id="" class="bg-white/10" />
	</div>
</div>

<style>
</style>
