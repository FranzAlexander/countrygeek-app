<script lang="ts">
	import type { Services } from '$lib/interfaces/service';
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import ServiceBooking from './ServiceBooking.svelte';

	export let data: PageData;
	$: supabase = data.supabase;

	let loadedData: Services[] = [];
	let booking: boolean = false;

	let bookingCategory: string = '';
	let bookingService: string = '';

	onMount(async () => {
		const { data, error } = await supabase
			.from('service_category')
			.select(
				`id, category_name, category_image_url, sub_service(
				id,
				sub_service_name
			),
			category_service_junction(
				service_description
			)`
			)
			.order('id')
			.returns<Services[]>();

		if (error) {
			console.log(error);
			return;
		}

		console.log(data);

		loadedData = data;
	});

	function nowBooking(category: string, service: string) {
		bookingCategory = category;
		bookingService = service;
		booking = true;
	}
</script>

<section class="mt-12 flex flex-col gap-10 bg-country-geek-test">
	{#each loadedData as service}
		<div class="mb-8 flex flex-col gap-8 p-5">
			<div class="flex rounded-xl bg-country-geek-white p-4">
				<!-- <img src={service?.category_image_url} alt="" class="h-16 w-20" /> -->
				<h1 class="text-3xl">{service?.category_name}</h1>
			</div>
			<div class="grid grid-cols-4 gap-8">
				{#each service?.sub_service as sub}
					<div
						class="flex flex-col justify-between gap-4 rounded-xl bg-country-geek-white p-4 shadow-md shadow-black transition-all duration-200 ease-in-out hover:shadow-xl hover:shadow-black"
					>
						<h2 class="text-2xl text-country-geek-test">{sub?.sub_service_name}</h2>
						<p class="text-gray-900">
							{service?.category_service_junction[sub?.sub_service_id - 1]?.service_description}
						</p>
						<button
							type="button"
							class="rounded-xl bg-country-geek-test p-4 font-bold text-country-geek-white transition-all duration-200 ease-linear hover:bg-country-geek-test-accent"
							on:click={() => {
								nowBooking(service?.category_name, sub?.sub_service_name);
							}}>Book!</button
						>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<!-- <form action="" method="POST">
		<input type="email" name="email" />
		<button type="submit">sub</button>
	</form> -->

	{#if booking}
		<ServiceBooking serviceCategory={bookingCategory} subService={bookingService} />
	{/if}
</section>
