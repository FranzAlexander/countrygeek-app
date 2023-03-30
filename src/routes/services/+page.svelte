<script lang="ts">
	import type { Services } from '$lib/interfaces/service';
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import ServiceBooking from './ServiceBooking.svelte';

	export let data: PageData;
	$: supabase = data.supabase;

	let loadedData: Services[] = [];

	onMount(async () => {
		const { data, error } = await supabase
			.from('service_category')
			.select(
				`category_name, category_image_url, sub_service(
			sub_service_name
			),
			category_service_junction(
				service_description
			)`
			)
			.order('category_id')
			.returns<Services[]>();
		if (!error) {
			loadedData = data;
			console.log(loadedData);
		} else {
			console.log(error);
		}
	});
</script>

<section class="bg-country-geek-test">
	<div class="flex justify-evenly">
		{#each loadedData as d}
			<div class="bg-country-geek-white">
				<img src={d?.category_image_url} alt="{d?.category_name} Image" />
				<h1 class="text-3xl">{d?.category_name}</h1>
			</div>
		{/each}
	</div>
	<ServiceBooking />
</section>
