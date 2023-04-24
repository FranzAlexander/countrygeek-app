<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User, UserAddress } from '$lib/interfaces/user';
	import type { PageData } from './$types';
	import AddressForm from './AddressForm.svelte';
	import ChangePassword from './ChangePassword.svelte';
	import PersonalForm from './PersonalForm.svelte';

	export let data: PageData;

	let session = data.session;
	let profile: User | null = null;
	if (data.userProfile) {
		profile = data.userProfile;
	}

	$: inputDisabled = [true, true];

	// function makeEditable(index:any) {
	// 	console.log(index.detail.index);
	// 	if (inputDisabled[index] === true) {
	// 		inputDisabled[index] = false;
	// 	} else {
	// 		inputDisabled[index] = true;
	// 	}
	// }

	let profileForm: any;
	let fullname = profile?.fullname || '';
	let phone: string = profile?.phone || '';
	let userAddress: UserAddress[];
	if (profile?.userAddress) {
		userAddress = profile?.userAddress;
	}

	// let userAddress = profile?.userAddress?.streetAddress;
	//Form current height 537.422px;
</script>

<section class="w-full p-1">
	<form method="POST" use:enhance>
		<ChangePassword />
		<PersonalForm {fullname} {phone} />
		<AddressForm {userAddress} />
	</form>
	<!-- Need to finish and add ChangeEmail.svelte -->
	<!-- Need to finish and add ChangePassword.svelte -->

	<!-- Personal Details form. -->
	<!-- <form
		action="?/updatePersonalDetails"
		method="POST"
		class="mb-10 flex w-full max-w-sm flex-col items-center rounded-lg border-2 border-gray-300 bg-secondary  text-gray-900 shadow-md shadow-black md:mx-auto md:max-w-md md:p-4 xl:max-w-xl"
	>
		<div class="flex w-full items-center justify-between border-b-2 border-gray-400 p-2 mb-4">
			<h2 class=" text-lg font-medium leading-none text-gray-900">Personal Details</h2>
			<button
				type="button"
				class="foucs:ring-primary-20 mb-2 mr-2 rounded-lg bg-primary p-2 px-5 py-2.5 text-sm font-medium text-secondary hover:bg-accent focus:ring-4"
				on:click={() => {
					makeEditable(0);
				}}>Edit</button
			>
		</div>
		<div class="w-full border-b-2 border-gray-300 pb-2 mb-4">
			<label for="profileName" class="mb-2 block font-medium">Fullname:</label>
			<input
				type="text"
				name="profileName"
				id="profileName"
				class="block w-full rounded-lg border focus:border-accent focus:ring-primary-20"
				value={fullName}
				disabled={inputDisabled[0]}
			/>
		</div>
		<div class="w-full">
			<label for="profilePhone" class="text-xl">Phone Number:</label>
			<input
				type="tel"
				name="profilePhone"
				id="profilePhone"
				class="rounded-md border-2 border-gray-300 p-2"
				value={phone}
				disabled={inputDisabled[0]}
			/>
		</div>

		{#if !inputDisabled[0]}
			<div class="flex justify-evenly border-t-2 border-gray-300 py-2">
				<button
					type="button"
					class="bg-country-geek-blue text-country-geek-white rounded-md p-2 text-xl"
					on:click={() => {
						makeEditable(0);
					}}>Cancel</button
				>
				<button
					type="submit"
					class="bg-country-geek-blue text-country-geek-white rounded-md p-2 text-xl">Save</button
				>
			</div>
		{/if}
	</form> -->

	<!-- Address Details form. -->
	<!-- <form
		action=""
		class="flex w-full max-w-sm flex-col items-center rounded-lg border-2 border-gray-300 bg-secondary p-2 text-gray-900 shadow-md shadow-black md:mx-auto md:max-w-md md:p-4 xl:max-w-xl"
	>
		<div class="flex justify-between border-b-2 border-gray-400 p-2">
			<h2 class="self-center text-2xl">Address Details</h2>
			<button
				type="button"
				class="bg-country-geek-blue text-country-geek-white mr-4 h-min rounded-lg p-2 text-xl"
				on:click={() => {
					makeEditable(1);
				}}>Edit</button
			>
		</div>
		{#each userAddress as address}
			<div class="flex flex-col gap-5 p-2">
				<div class="flex items-center justify-between border-b-2 border-gray-300 py-4">
					<label for="streetAddress" class="text-xl">Street Address:</label>
					<input
						type="text"
						name="streetAddress"
						id="streetAddress"
						class="rounded-md border-2 border-gray-300 p-2"
						disabled={inputDisabled[1]}
						value={address.streetAddress}
					/>
				</div>
				<div class="flex items-center justify-between border-b-2 border-gray-300 pb-4">
					<label for="city" class="text-xl">City/Suburb:</label>
					<input
						type="text"
						name="city"
						id="city"
						class="rounded-md border-2 border-gray-300 p-2"
						disabled={inputDisabled[1]}
						value={address.city}
					/>
				</div>
				<div
					class="last:border-b-none border-2-b flex items-center justify-between border-gray-300 pb-2"
				>
					<label for="postcode" class="text-xl">Postcode:</label>
					<input
						type="text"
						class="rounded-md border-2 border-gray-300 p-2"
						disabled={inputDisabled[1]}
						value={address.postcode}
					/>
				</div>
			</div>
		{/each}
		<div />
	</form> -->
</section>
