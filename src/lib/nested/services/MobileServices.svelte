<script lang="ts">
	import type { BookingOptions } from '$lib/interfaces/booking';
	import type { ServiceInfo } from '$lib/interfaces/service';
	import { selected_booking_info } from '$lib/stores';

	export let mobile_services: ServiceInfo[];

	function update_booking(type: BookingOptions) {
		selected_booking_info.update((value) => (value = type));
	}
</script>

<section class="flex flex-col text-white gap-5">
	<h1 class="text-5xl text-center">Mobiles & Laptops</h1>
	<div class="grid grid-cols-3 gap-5 p-5 items-center">
		{#each mobile_services as service}
			<div
				class="bg-white/10 rounded-lg flex flex-col border-2 border-transparent hover:border-2 hover:border-cyan-500 p-2 gap-5 w-1/2  min-h-[300px] m-auto shadow-md"
			>
				<h2
					class="text-3xl bg-country-geek-blue/50 text-center p-2 border-b-2 border-country-geek-gold rounded-t-md"
				>
					{service.s_type}
				</h2>
				<p class="p-2 text-lg min-h-[170px] tracking-wide">
					{service.description}
				</p>
				<a
					href="/booking"
					class="text-center p-2 text-2xl bg-country-geek-light-purple/90 w-1/2 m-auto rounded-3xl"
					on:click={() =>
						update_booking({ service_category: service.category, service_type: service.s_type })}
					>Book Now!</a
				>
			</div>
		{/each}
	</div>
</section>
