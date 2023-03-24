<script lang="ts">
	import { backend_api } from '$lib/api';
	import type { Services, ServiceTypes } from '$lib/interfaces/service';
	import ServiceSelection from '$lib/nested/services/ServiceSelection.svelte';
	import type { PageData, PageServerData } from './$types';
	import ComputerImage from '$lib/images/services/Computer.jpg';
	import ComputerRepair from '$lib/images/services/category_0.jpg';
	import Background from '$lib/images/services/winery_background.jpg';

	import RepairTools from '$lib/icons/pop_services/RepairTools.svelte';
	import { onMount } from 'svelte';
	import SelectedServiceType from '$lib/nested/services/SelectedServiceType.svelte';
	import LaptopMacIcon from '$lib/icons/LaptopMacIcon.svelte';
	import ServiceCategory from './ServiceCategory.svelte';
	import ExpandMore from '$lib/nested/ExpandMore.svelte';
	import { enhance } from '$app/forms';
	import ServiceBooking from './ServiceBooking.svelte';

	let images = [ComputerImage, ComputerRepair];
	export let data: PageServerData;
	const services: Services[] = data.services;

	let services_showing: boolean[] = [false, false, false, false];
	const service_steps: string[] = ['\u2460', '\u2461', '\u2462', '\u2463', '\u2464'];

	let booking_step: boolean = false;

	let selected_category: number = 1;
	let selected_type: number = 0;

	function show_service(id: number) {
		const index: number = id - 1;
		if (services_showing[index] === false) {
			services_showing[index] = true;
		} else {
			services_showing[index] = false;
		}
	}

	function close_services() {
		for (let i = 0; i < services_showing.length; i++) {
			services_showing[i] = false;
		}
	}
</script>

<section
	class="flex flex-col items-center gap-10 text-white pt-4 pb-4"
	style="background-image: url({Background});"
>
	{#each services as category}
		<div class="group flex w-2/3 bg-neutral-800 rounded-lg min-h-[250px] shadow-md shadow-black/50">
			<div class="flex flex-col w-full items-center justify-center gap-2">
				<h1 class="text-3xl w-full self-center text-center">
					{category.service_category.category}
				</h1>
				<button
					type="button"
					class=" flex justify-evenly items-center bg-neutral-700 rounded-full p-2 w-1/4 transition ease-in-out duration-500 group-hover:bg-gradient-to-bl from-cyan-500 to-country-geek-light-purple"
					on:click={() => show_service(category.service_category.category_id)}
				>
					<ExpandMore />
				</button>
			</div>
			{#if category.service_category.category_id === 1}
				<img src={ComputerImage} alt="Computer being repaired" class="rounded-lg w-1/3" />
			{/if}
		</div>
		{#each category.service_types as category_type}
			<div
				class="w-2/3 rounded-lg p-1 bg-gradient-to-l from-country-geek-light-purple to-cyan-500"
				hidden={!services_showing[category.service_category.category_id - 1]}
			>
				<div class="rounded-lg bg-neutral-800 flex">
					<img src={ComputerRepair} alt="" class="w-1/4 rounded-lg opacity-50" />
					<div class="flex w-3/4 bg-gradient-to-bl from-country-geek-light-purple/10 p-2">
						<div class="flex flex-col gap-8 w-3/4 p-2 items-center ">
							<h2 class="text-2xl">
								{category_type.type_name}
							</h2>
							<p>{category_type.type_description}</p>
						</div>
						<button
							type="button"
							class="bg-country-geek-light-purple p-2 h-min text-2xl rounded-lg drop-shadow-lg shadow-country-geek-dark-purple w-1/4 place-self-center"
							on:click|preventDefault={() => {
								selected_type = category_type.type_id;
								selected_category = category.service_category.category_id;

								close_services();

								booking_step = true;
							}}>Select</button
						>
					</div>
				</div>
			</div>
		{/each}
	{/each}

	{#if booking_step}
		<ServiceBooking category_id={selected_category} type_id={selected_type} />
	{/if}
</section>
