<script lang="ts">
	import type { DeviceRepairBooking, DeviceOptions } from '$lib/interfaces/booking';
	import type { PageData } from './$types';
	export let data: PageData;

	// export let data;

	// const { dOptions } = data;

	// console.log(dOptions);
	import { onMount } from 'svelte';
	import { each, element } from 'svelte/internal';
	import { PostBooking } from '$lib/utils';

	// Called just before DOM render.
	// onMount(async () => {
	// 	// Fetch call to the webapi to get options data.
	// 	// Data received ["Computer", "Laptop", "Mobile", "Printer", "Other", "Apple", "Microsoft", "Samsung", "HP", "Dell", "Other"]
	// 	// await fetch('http://127.0.0.1:3000/')
	// 	// 	.then((res) => res.json())
	// 	// 	.then((data: string[]) => {
	// 	// 		// Want to split array as ["Computer", "Laptop", "Mobile", "Printer", "Other"] is for one part.
	// 	// 		// ["Apple", "Microsoft", "Samsung", "HP", "Dell", "Other"] is for another.
	// 	// 		const sIndex = data.findIndex((element) => element == 'Other');
	// 	// 		dOptions.dTypes = data.slice(0, sIndex + 1);
	// 	// 		dOptions.dBrands = data.slice(sIndex + 1, data.length);
	// 	// 	});
	// 	const sIndex = testOptions.findIndex((element) => element == 'Other');
	// 	dOptions.dTypes = testOptions.slice(0, sIndex + 1);
	// 	dOptions.dBrands = testOptions.slice(sIndex + 1, testOptions.length);
	// 	console.log(data);
	// });
</script>

<section>
	<section class="device_option_container">
		<h2>What is the type of device are you having trouble with?</h2>
		{#each data.deviceOptions.dTypes as dt}
			<button
				class="option_btn {data.deviceRepair.d_type === dt ? 'selected_btn' : ''} "
				on:click={() => (data.deviceRepair.d_type = dt)}>{dt}</button
			>
		{/each}
	</section>
	<hr />
	<section class="device_option_container">
		<h2>What is the brand of the {data.deviceRepair.d_type}?</h2>
		{#each data.deviceOptions.dBrands as db}
			<button
				class="option_btn {data.deviceRepair.d_brand === db ? 'selected_btn' : ''}"
				on:click={() => (data.deviceRepair.d_brand = db)}>{db}</button
			>
		{/each}
	</section>
	<hr />
	<section class="device_option_container">
		<h2>Brief description of the problem.</h2>
		<textarea name="device_problem_desc" id="device_problem_desc" cols="30" rows="10" />
	</section>
	<hr />
	<section class="device_option_container">
		<h2>Your details.</h2>
		<div class="personal-details-container">
			<div class="details-container">
				<div>
					<h2>*Firstname:</h2>
					<input
						class="form-input"
						id="first_name"
						bind:value={data.deviceRepair.user.first_name}
						placeholder="Please enter first name here."
					/>
				</div>
				<div>
					<h2>*Lastname:</h2>
					<input
						bind:value={data.deviceRepair.user.last_name}
						placeholder="Please enter last name here."
					/>
				</div>
				<div>
					<h2>Email:</h2>
					<input type="email" placeholder="Please enter you email address: (Optional)" />
				</div>
				<div>
					<p>Number:</p>
					<input type="number" placeholder="Please enter your phone number: (Optional)" />
				</div>
			</div>
			<div class="details-container">
				<div>
					<p>*Address:</p>
					<input
						bind:value={data.deviceRepair.user.address}
						placeholder="Please enter you address."
					/>
				</div>
			</div>
			<div>
				<div class="details-container">
					<p>Would you like me to call you?</p>
					<input type="checkbox" />
				</div>
			</div>
		</div>
		<button
			on:click={async () => await PostBooking('http://127.0.0.1:3000/test_post', data.deviceRepair)}
			>Book</button
		>
	</section>
</section>

<style>
	h2 {
		font-size: 2em;
	}
	.option_btn {
		border-radius: 12px;
		background-color: #0c1d36;
		color: white;
		font-size: 2em;
		margin: auto 2%;
		min-height: 10vw;
		min-height: 10vh;
		width: 15vw;
		/* box-shadow: rgba(13, 38, 76, 0.19) 0px 9px 20px; */
		/* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
			0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
			0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12); */
		/* box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.38); */
		box-shadow: rgba(12, 29, 54, 0.25) 0px 14px 28px, rgba(12, 29, 54, 0.22) 0px 10px 10px;
	}

	.device_option_container {
		text-align: center;
		margin-bottom: 2vh;
	}

	.selected_btn {
		background: rgb(249, 204, 11);
		background: linear-gradient(0deg, rgba(249, 204, 11, 1) 8%, rgba(12, 29, 54, 1) 78%);
		box-shadow: rgba(249, 204, 11, 0.25) 0px 14px 28px, rgba(249, 204, 11, 0.22) 0px 10px 10px;

		/* box-shadow: 0 2.8px 2.2px rgba(249, 204, 11, 0.034), 0 6.7px 5.3px rgba(249, 204, 11, 0.048),
			0 12.5px 10px rgba(249, 204, 11, 0.06), 0 22.3px 17.9px rgba(249, 204, 11, 0.072),
			0 41.8px 33.4px rgba(249, 204, 11, 0.086), 0 100px 80px rgba(249, 204, 11, 0.12); */
		/* box-shadow: 4px 8px 8px rgba(249, 204, 11, 0.38); */
	}

	hr {
		height: 1vh;
		margin-top: 5vh;
		background-color: rgb(12, 29, 54);
	}

	.personal-details-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1vw;
		padding: 1vw;
	}

	.details-container {
		display: grid;
		justify-content: center;
		background-color: #0c1d36;
		border-radius: 23px;
		color: white;
	}

	.form-input {
		border-radius: 10px;
	}
</style>
