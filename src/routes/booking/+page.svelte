<script lang="ts">
	import type { BookingOptions } from '$lib/interfaces/booking';
	import ServiceDetails from '$lib/nested/booking/ServiceDetails.svelte';
	import { selected_booking_info } from '$lib/stores';
	import type { PageData } from './$types';
	const service_category: string[] = [
		'Computers & Laptops',
		'Mobiles & Tablets',
		'Email & Internet',
		'Printer'
	];
	const service_device: string[] = ['Computer', 'Laptop'];
	const device_brand: string[] = ['Apple', 'HP', 'Custom'];
	const service_type: string[] = ['Setup', 'Repair', 'Maintenance', 'Data Backup', 'Upgrade'];
	let selected_service: BookingOptions;

	selected_booking_info.subscribe((value) => {
		selected_service = value;
	});

	function scrollIntoView(target: string) {
		const element = document.getElementById(target);
		if (!element) return;
		//element.scrollIntoView({ behavior: 'smooth' });
		element.scrollIntoView(true);
	}

	export let data: PageData;
</script>

<section class="bg-country-geek-blue">
	<ServiceDetails
		categories={data.categories}
		selected_category={selected_service.service_category}
	/>
	<!-- <div class="text-white w-1/3 m-auto mt-10 bg-white/5 rounded-lg">
		<form action="" class="p-2">
			<div class="flex flex-col gap-5">
				<h2 class="text-3xl border-b-2 border-country-geek-gold">Service Details</h2>
				<div class="flex flex-col gap-5" id="section-1">
					<div class="flex flex-col">
						<label for="" class="text-xl">Category</label>
						<select name="" id="" class="bg-white/10">
							{#each service_category as serv_cat}
								{#if serv_cat === selected_service.service_category}
									<option value={serv_cat} class="bg-country-geek-blue" selected>{serv_cat}</option>
								{:else}
									<option value={serv_cat} class="bg-country-geek-blue">{serv_cat}</option>
								{/if}
							{/each}
						</select>
					</div>
					<div class="flex flex-col">
						<label for="" class="text-xl">Type</label>
						<select name="" id="" class="bg-white/10">
							{#each service_type as serv_type}
								{#if serv_type === selected_service.service_type}
									<option value={serv_type} class="bg-country-geek-blue" selected
										>{serv_type}</option
									>
								{:else}
									<option value={serv_type} class="bg-country-geek-blue">{serv_type}</option>
								{/if}
							{/each}</select
						>
					</div>
					<div class="flex flex-col">
						<label for="" class="text-xl">Device</label>
						<select name="" id="" class="bg-white/10">
							{#each service_device as serv_dev}
								<option value={serv_dev} class="bg-country-geek-blue">{serv_dev}</option>
							{/each}
						</select>
					</div>
					<div class="flex flex-col">
						<label for="" class="text-xl">Brand</label>
						<select name="" id="" class="bg-white/10">
							{#each device_brand as dev_brand}
								<option value={dev_brand} class="bg-country-geek-blue">{dev_brand}</option>
							{/each}
						</select>
					</div>
					<div class="flex flex-col">
						<label for="" class="text-xl">Brief Description</label>
						<textarea name="" id="" cols="20" rows="10" class="bg-white/10" />
					</div>
					<div class="flex flex-col">
						<label for="" class="text-xl">Date</label>
						<input type="date" class="bg-white/10" />
					</div>
					<button
						class="p-2 text-xl bg-country-geek-light-purple rounded-3xl"
						on:click={() => scrollIntoView('section-2')}>Next</button
					>
				</div>
				<h2 class="text-2xl border-b-2 border-country-geek-gold">Personal Details</h2>
				<div class="flex flex-col gap-5" id="section-2">
					<div class="flex flex-col">
						<label for="">Firstname</label>
						<input
							type="text"
							name=""
							id=""
							class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
						/>
					</div>
					<div class="flex flex-col">
						<label for="">Lastname</label>
						<input
							type="text"
							class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
						/>
					</div>
					<div class="flex flex-col ">
						<label for="">Email</label>
						<input
							type="email"
							name=""
							id=""
							class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
						/>
					</div>
					<div class="flex flex-col">
						<label for="">Phone</label>
						<input
							type="number"
							name=""
							id=""
							class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
						/>
					</div>
				</div>

				<h2 class="text-2xl border-b-2 border-country-geek-gold">Address Details</h2>
			</div>

			<div class="grid grid-cols-2 gap-5 p-2 justify-evenly" id="section-3">
				<div class="flex flex-col">
					<label for="">Street/Unit Number</label>
					<input
						type="number"
						name=""
						id=""
						class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
					/>
				</div>
				<div class="flex flex-col">
					<label for="">Street Name</label>
					<input
						type="text"
						name=""
						id=""
						class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
					/>
				</div>
				<div class="flex flex-col">
					<label for="">Suburb</label>
					<input
						type="text"
						name=""
						id=""
						class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
					/>
				</div>
				<div class="flex flex-col">
					<label for="">Postcode</label>
					<input
						type="number"
						name=""
						id=""
						class=" rounded caret-cyan-500  focus:outline-none bg-white/10 border-2 border-cyan-500 outline-cyan-500  text-2xl"
					/>
				</div>
			</div>
		</form>
	</div> -->
</section>
