<script lang="ts">
	import ServiceSelection from '$lib/nested/services/ServiceSelection.svelte';
	import { service_store } from '$lib/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	service_store.set(data.all_services);
</script>

<section class="bg-country-geek-blue">
	{#each data.all_services as service}
		<ServiceSelection services={service} />
	{/each}

	<!-- <ComputerServices computer_services={data.all_services[0]} />
	<div
		class="min-h-[150px] bg-gradient-to-b from-country-geek-blue via-country-geek-light-purple to-country-geek-blue"
	/>
	<MobileServices mobile_services={data.all_services[1]} /> -->
</section>
