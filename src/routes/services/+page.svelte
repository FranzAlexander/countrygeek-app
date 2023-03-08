<script lang="ts">
	import { backend_api } from '$lib/api';
	import type { ServiceTypes } from '$lib/interfaces/service';
	import ServiceSelection from '$lib/nested/services/ServiceSelection.svelte';
	import { service_store } from '$lib/stores';
	import type { PageData } from './$types';

	import RepairTools from '$lib/icons/pop_services/RepairTools.svelte';
	import { onMount } from 'svelte';
	import SelectedServiceType from '$lib/nested/services/SelectedServiceType.svelte';

	export let data: PageData;

	let category_types: ServiceTypes[] = data.category_types;
	const service_steps: string[] = ['\u2460', '\u2461', '\u2462', '\u2463', '\u2464'];
	let number_one: string = '\u2460';
	let number_two: string = '\u2461';
	const number_three: string = '\u2462';

	let booking_step: number = 0;

	let selected_category: number = 1;
	let selected_type: boolean = false;
	let selected_type_name: string = '';
	let selected_type_description: string = '';

	async function select_category(category_id: number) {
		selected_category = category_id;
		let response = await fetch(`${backend_api}/get_service_types`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ category_id: category_id })
		});
		category_types = await response.json();
		console.log(category_types);
	}
</script>

<section class="bg-country-geek-blue text-white flex flex-col">
	<h1 class="text-5xl p-6">Services</h1>
	<div class="flex bg-neutral-900">
		<span class="text-5xl place-self-start p-2">{service_steps[0]}</span>
		<div class=" flex justify-evenly pt-6 pb-6 w-full">
			{#each data.categories as category}
				<button
					class="bg-country-geek-light-purple p-4 rounded-full text-xl {selected_category ===
					category.category_id
						? 'bg-gradient-to-r from-cyan-500 to-country-country-geek-light-purple p-5'
						: 'hover:border-2 hover:border-cyan-500 border-2 border-transparent'}"
					on:click={async () => {
						await select_category(category.category_id);
					}}
				>
					{category.category}
				</button>
			{/each}
		</div>
	</div>
	<div class="flex flex-col">
		<span class="text-5xl place-self-start p-2">{service_steps[1]}</span>
		<div class="flex p-2 pt-2 pb-10 gap-2 justify-evenly ">
			{#if selected_type === false}
				{#each category_types as category_type}
					<div
						class="w-1/6 p-1 flex group rounded-lg shadow-md shadow-black bg-gradient-to-bl from-country-geek-light-purple to-cyan-500 hover:from-cyan-500 hover:to-cyan-500"
					>
						<div class="bg-neutral-900 w-full rounded-lg flex flex-col gap-5 justify-evenly p-2">
							<div class="flex justify-between">
								<RepairTools />
								<h2 class="self-center text-2xl m-auto ">{category_type.type_name}</h2>
							</div>
							<p class="text-center">{category_type.type_description}</p>
							<button
								class="bg-country-geek-light-purple rounded-full self-center w-2/3 text-2xl p-2 mt-auto mb-5"
								on:click={() => {
									selected_type = true;
									selected_type_name = category_type.type_name;
									selected_type_description = category_type.type_description;
								}}>Select</button
							>
						</div>
					</div>
				{/each}
			{:else}
				<SelectedServiceType
					type_name={selected_type_name}
					type_description={selected_type_description}
				/>
			{/if}
		</div>
	</div>
	<div class="flex flex-col justify-evenly">
		<div class="flex justify-evenlyp-2 bg-neutral-900">
			<button
				class="text-2xl w-full p-2 {booking_step === 0
					? 'bg-country-geek-blue border-2 border-country-geek-gold rounded-t-lg'
					: 'bg-neutral-900'}"
				on:click={() => (booking_step = 0)}
			>
				<span>{service_steps[2]}</span> Service Detials</button
			>
			<button
				class="text-2xl w-full p-2 {booking_step === 1 ? 'bg-country-geek-blue' : 'bg-neutral-900'}"
				on:click={() => (booking_step = 1)}
			>
				<span>{service_steps[3]}</span> Personal Detials</button
			>
			<button
				class="text-2xl w-full p-2 {booking_step === 2 ? 'bg-country-geek-blue' : 'bg-neutral-900'}"
				on:click={() => (booking_step = 2)}
			>
				<span>{service_steps[4]}</span> Address Detials</button
			>
		</div>
		<!-- <div class="bg-neutral-900  p-2">
			<textarea name="" id="" cols="30" rows="10" class="bg-neutral-800 rounded" />
		</div> -->
	</div>
</section>
