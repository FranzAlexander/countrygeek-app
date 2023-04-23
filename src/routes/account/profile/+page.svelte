<script lang="ts">
	import type { User, UserAddress } from '$lib/interfaces/user';
	import type { PageData } from './$types';

	export let data: PageData;

	let session = data.session;
	let profile: User | null = null;
	if (data.userProfile) {
		profile = data.userProfile;
	}

	let inputDisabled: boolean[] = [true, true];

	function makeEditable(index: number) {
		if (inputDisabled[index] === true) {
			inputDisabled[index] = false;
		} else {
			inputDisabled[index] = true;
		}
	}

	let profileForm: any;
	let fullName: string = profile?.fullname || '';
	let phone: string = profile?.phone || '';
	let userAddress: UserAddress[];
	if (profile?.userAddress) {
		userAddress = profile?.userAddress;
	}
	let streetAddress: string | null;
	let city: string | null;
	let postcode: string | null;

	// let userAddress = profile?.userAddress?.streetAddress;
	//Form current height 537.422px;
</script>

<section class="ml-40 flex w-2/4 flex-col gap-10">
	<!-- Need to finish and add ChangeEmail.svelte -->
	<!-- Need to finish and add ChangePassword.svelte -->

	<!-- Personal Details form. -->
	<form
		action="?/updatePersonalDetails"
		method="POST"
		class="bg-country-geek-white flex w-full flex-col rounded text-gray-900"
	>
		<div class="flex justify-between border-b-2 border-gray-400 p-2">
			<h2 class="self-center text-2xl">Personal Details</h2>
			<button
				type="button"
				class="bg-country-geek-blue text-country-geek-white mr-4 h-min rounded-lg p-2 text-xl"
				on:click={() => {
					makeEditable(0);
				}}>Edit</button
			>
		</div>
		<div class="flex flex-col p-2">
			<div class="flex items-center justify-between border-b-2 border-gray-300 py-4">
				<label for="profileName" class="text-xl">Fullname:</label>
				<input
					type="text"
					name="profileName"
					id="profileName"
					class="rounded-md border-2 border-gray-300 p-2"
					value={fullName}
					disabled={inputDisabled[0]}
				/>
			</div>
			<div class="flex items-center justify-between py-2 pt-4">
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
	</form>

	<!-- Address Details form. -->
	<form action="" class="bg-country-geek-white flex w-full flex-col rounded text-gray-900">
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
	</form>
</section>
