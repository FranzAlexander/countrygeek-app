<script lang="ts">
	import type { User, UserAddress } from '$lib/interfaces/user';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let session = data.session;
	let user: User | null = null;

	if (data.userDetails) {
		user = data.userDetails;
	}
	const selectedService = data.selectedService;

	let currentStep: number = 1;

	let userAddress: UserAddress | null;

	let saveAddress: boolean = false;

	// Booking.
	let description: string = '';
	let descDisable: boolean = true;

	// User Details.
	$: fullname = user?.fullname || '';
	$: email = session?.user.email || '';
	$: emailError = '';
	$: phone = user?.phone || '';
	let personalDetailsDisabled: boolean = true;
	let userValid: boolean = false;

	function checkDescription() {
		if (description !== '') {
			descDisable = false;
		} else {
			descDisable = true;
		}
	}

	function checkUserDetails() {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (email === '') {
			emailError = 'Email is required!';
			userValid = false;
		} else if (!emailRegex.test(email)) {
			emailError = 'Please enter valid email!';
			userValid = false;
		} else {
			userValid = true;
		}

		if (fullname !== '' && email !== '' && phone !== '' && userValid) {
			emailError = '';
			personalDetailsDisabled = false;
		} else {
			personalDetailsDisabled = true;
		}
	}

	function checkUserDetailsValid() {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (!emailRegex.test(email)) {
			emailError = 'Please enter a valid email!';
		}
	}

	if (user?.userAddress) {
		userAddress = user.userAddress[0];
	} else {
		userAddress = null;
		saveAddress = true;
	}

	function nextStep() {
		if (currentStep < 4) {
			currentStep += 1;
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep -= 1;
		}
	}
</script>

<section class="bg-country-geek-blu">
	<div
		class="m-auto flex w-1/3 max-w-xl flex-col rounded-lg border-2 border-gray-300 bg-country-geek-white p-4 shadow-md shadow-black"
	>
		<form action="" class="w-full">
			<div class="mb-2 flex flex-col p-2 {currentStep === 1 ? '' : 'hidden'}">
				<input type="text" hidden bind:value={selectedService.categoryName} name="categoryName" />
				<input type="text" hidden bind:value={selectedService.serviceName} name="serviceName" />
				<label for="bookingDescription" class="mb-2 block text-2xl font-semibold text-gray-900"
					>Tell us about your problem:</label
				>
				<textarea
					name="bookingDescription"
					id="bookingDescription"
					cols="30"
					rows="10"
					class="tedxt-xl mb-2 resize-none rounded-md border-2 border-gray-300 p-2 text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
					bind:value={description}
					on:input={checkDescription}
				/>

				<button
					type="button"
					class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
					disabled={descDisable}
					on:click={nextStep}>Next</button
				>
			</div>
			<div class="mb-2 flex flex-col gap-3 p-2 {currentStep === 2 ? '' : 'hidden'}">
				<div class="flex flex-col">
					<label for="fullname" class="mb-2 block text-2xl font-semibold text-gray-900"
						>Fullname:</label
					>
					<input
						type="text"
						name="fullname"
						id="fullname"
						class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
						required
						bind:value={fullname}
						on:input={checkUserDetails}
					/>
				</div>
				<div class="flex flex-col">
					<label for="email" class="mb-2 block text-2xl font-semibold text-gray-900">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
						required
						bind:value={email}
						on:input={checkUserDetails}
					/>
					<p class="p-1 text-xl text-red-500">{emailError}</p>
				</div>
				<div class="flex flex-col">
					<label for="phone" class="mb-2 block text-2xl font-semibold text-gray-900"
						>Phone Number:</label
					>
					<input
						type="tel"
						name="phone"
						id="phone"
						required
						class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
						pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
						bind:value={phone}
						on:input={checkUserDetails}
					/>
				</div>

				<div class="flex w-full justify-between">
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={prevStep}>Back</button
					>
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						disabled={personalDetailsDisabled}
						on:click={nextStep}>Next</button
					>
				</div>
			</div>

			<div class="mb-2 flex flex-col p-2 {currentStep === 3 ? '' : 'hidden'}">
				<div class="flex flex-col">
					<label for="streetAddress" class="mb-2 block text-2xl font-semibold text-gray-900"
						>Street Address:</label
					>
					<input
						type="text"
						name="streetAddress"
						id="streetAddress"
						class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
						required
						value={userAddress?.streetAddress || ''}
					/>
				</div>
				<div class="flex">
					<div class="flex flex-col">
						<label for="city" class="mb-2 block text-2xl font-semibold text-gray-900"
							>City/Suburb:</label
						>
						<input
							type="text"
							name="city"
							id="city"
							class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
							required
							value={userAddress?.city || ''}
						/>
					</div>
					<div class="flex flex-col">
						<label for="postcode" class="mb-2 block text-2xl font-semibold text-gray-900"
							>Postcode:</label
						>
						<input
							type="number"
							name="postcode"
							id="postcode"
							class="rounded-md border-2 border-gray-300 p-2 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
							required
							value={userAddress?.postcode || ''}
						/>
					</div>
				</div>
				{#if saveAddress}
					<div class="mb-2 flex">
						<input type="checkbox" id="saveAddress" name="saveAddress" />
						<label for="saveAddress">Would you like to save your address?</label>
					</div>
				{/if}
				<div class="flex w-full justify-between">
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={prevStep}>Back</button
					>
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={nextStep}>Next</button
					>
				</div>
			</div>
			<div class="mb-2 flex flex-col p-2 {currentStep === 4 ? '' : 'hidden'}">
				<div class="flex flex-col">
					<p>We will contact you within 2 buisness days to set a date</p>
					<p>By confirming the booking you are agreeing to the Terms & Conditions</p>
					<div class="flex w-full justify-between">
						<button
							type="button"
							class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
							on:click={prevStep}>Back</button
						>
						<button
							type="submit"
							class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
							>Confirm</button
						>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>
