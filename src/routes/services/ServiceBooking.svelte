<script lang="ts">
	import type { Session } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import StepperIndicator from './StepperIndicator.svelte';

	export let session: Session | null;

	let formElement: Element;
	let currentStep: number = 1;
	let description: string = '';
	let descDisable = true;

	let fullname: string = (session?.user.user_metadata?.fullname as string) ?? '';
	let email: string = session?.user.email ?? '';
	let phone: string = '';
	let personalDetailsDisabled: boolean = true;

	onMount(() => {
		formElement.scrollIntoView({ behavior: 'smooth' });
	});

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

	function check() {
		if (description !== '') {
			descDisable = false;
		} else {
			descDisable = true;
		}
	}

	function checkPersonalDetails() {
		if (fullname !== '' && email !== '' && phone !== '') {
			personalDetailsDisabled = false;
		}
	}
</script>

<div bind:this={formElement}>
	<StepperIndicator {currentStep} />

	<form
		method="POST"
		class="m-auto flex w-1/3 flex-col rounded-lg border-2 border-gray-300 bg-country-geek-white p-4 shadow-md shadow-black"
	>
		{#if currentStep === 1}
			<fieldset class="mb-2 flex flex-col p-2">
				<label for="booking_description" class="mb-2 block text-2xl font-semibold text-gray-800"
					>Tell us about your problem:</label
				>
				<textarea
					name="booking_description"
					id="booking_description"
					placeholder="Please provide a brief description of your booking."
					cols="30"
					rows="10"
					class="mb-2 rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					bind:value={description}
					on:input={check}
				/>
				<button
					type="button"
					class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md  shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
					disabled={descDisable}
					on:click={nextStep}>Next</button
				>
			</fieldset>
		{:else if currentStep === 2}
			<fieldset class="mb-2 flex flex-col gap-4 p-2">
				<div class="flex flex-col">
					<label for="fullname" class="mb-2 block text-2xl font-semibold text-gray-800"
						>Full Name:</label
					>
					<input
						type="text"
						name="fullname"
						id="fullname"
						placeholder="Please enter your fullname."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
						required
						bind:value={fullname}
						on:input={checkPersonalDetails}
					/>
				</div>
				<div class="flex flex-col">
					<label for="email" class="mb-2 block text-2xl font-semibold text-gray-800"
						>Email Address:</label
					>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Please enter your email."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl  text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
						required
						bind:value={email}
						on:input={checkPersonalDetails}
					/>
				</div>
				<div class="flex flex-col">
					<label for="phone" class="mb-2 block text-2xl font-semibold text-gray-800"
						>Phone Number:</label
					>
					<input
						type="tel"
						name="phone"
						id="phone"
						placeholder="Please enter your phone number."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
						bind:value={phone}
						on:input={checkPersonalDetails}
					/>
				</div>
				<div class="flex w-full justify-between">
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md  shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={prevStep}>Back</button
					>
					<button
						type="button"
						disabled={personalDetailsDisabled}
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md  shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={nextStep}>Next</button
					>
				</div>
			</fieldset>
		{:else if currentStep === 3}
			<fieldset class="mb-2 flex flex-col gap-4 p-2">
				<div class="flex flex-col">
					<label for="address" class="mb-2 block text-2xl font-semibold text-gray-800"
						>Address:</label
					>
					<input
						type="text"
						name="address"
						id="address"
						placeholder="Enter your street address."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					/>
				</div>

				<div class="flex flex-col">
					<label for="city" class="mb-2 block text-2xl font-semibold text-gray-800">City:</label>
					<input
						type="text"
						name="city"
						id="city"
						placeholder="Enter your city."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					/>
				</div>
				<div class="flex flex-col">
					<label for="postcode" class="mb-2 block text-2xl font-semibold text-gray-800"
						>Postcode</label
					>
					<input
						type="text"
						name="postcode"
						id="postcode"
						placeholder="Enter your postcode."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					/>
				</div>
				<div class="flex w-full justify-between">
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md  shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={prevStep}>Back</button
					>
					<button
						type="button"
						class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md  shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
						on:click={nextStep}>Next</button
					>
				</div>
			</fieldset>
		{:else}
			<p>s</p>
		{/if}
	</form>
</div>
