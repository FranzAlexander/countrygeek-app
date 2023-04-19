<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { Session } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import StepperIndicator from './StepperIndicator.svelte';
	import type { User } from '$lib/interfaces/user';

	export let serviceCategory = '';
	export let subService = '';

	let formElement: Element;
	let currentStep: number = 1;
	let description: string = '';
	let descDisable = true;

	let fullname: string | null;
	let email: string = 'testpersonok@gmail.com';
	let phone: string = '';
	let personalDetailsDisabled: boolean = true;

	onMount(() => {
		formElement.scrollIntoView({ behavior: 'smooth' });
	});

	export function scrollToForm() {
		formElement.scrollIntoView({ behavior: 'smooth' });
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

	const handleSubmit: SubmitFunction = () => {
		return async ({ result }) => {
			await applyAction(result);
		};
	};
</script>

<div bind:this={formElement}>
	<StepperIndicator {currentStep} />

	<form
		method="POST"
		use:enhance={handleSubmit}
		class="m-auto flex w-1/3 flex-col rounded-lg border-2 border-gray-300 bg-country-geek-white p-4 shadow-md shadow-black"
	>
		<fieldset class="mb-2 flex flex-col p-2 {currentStep === 1 ? '' : 'hidden'}">
			<input type="text" hidden bind:value={serviceCategory} name="serviceCategory" />
			<input type="text" name="subService" hidden bind:value={subService} />
			<label for="booking_description" class="mb-2 block text-2xl font-semibold text-gray-800"
				>Tell us about your problem:</label
			>
			<textarea
				name="booking_description"
				id="booking_description"
				placeholder="Please provide a brief description of your booking."
				cols="30"
				rows="10"
				class="mb-2 resize-none rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
				bind:value={description}
				on:input={check}
			/>
			<button
				type="button"
				class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
				disabled={descDisable}
				on:click={nextStep}>Next</button
			>
		</fieldset>
		<fieldset class="mb-2 flex flex-col gap-4 p-2 {currentStep === 2 ? '' : 'hidden'}">
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
					class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					required
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
					class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
					on:click={prevStep}>Back</button
				>
				<button
					type="button"
					disabled={personalDetailsDisabled}
					class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear enabled:hover:bg-country-geek-test-accent disabled:opacity-50 disabled:shadow-none"
					on:click={nextStep}>Next</button
				>
			</div>
		</fieldset>
		<fieldset class="mb-2 flex flex-col gap-4 p-2 {currentStep === 3 ? '' : 'hidden'}">
			<div class="flex flex-col">
				<label for="address" class="mb-2 block text-2xl font-semibold text-gray-800"
					>Street Address:</label
				>
				<input
					type="text"
					name="address"
					id="address"
					placeholder="Enter your street address."
					class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
				/>
			</div>
			<div class="flex justify-evenly">
				<div class="flex flex-col">
					<label for="city" class="mb-2 block text-2xl font-semibold text-gray-800"
						>City/Suburb:</label
					>
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
						>Postcode:</label
					>
					<input
						type="text"
						name="postcode"
						id="postcode"
						placeholder="Enter your postcode."
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
					/>
				</div>
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
					on:click={nextStep}>Next</button
				>
			</div>
		</fieldset>
		<fieldset class="mb-2 flex flex-col gap-4 p-2 {currentStep === 4 ? '' : 'hidden'}">
			<p>We will get in contact with you to make a time for the appoitment!</p>
			<p>By clicking confirm you are agreeing to the Terms and Conditions.</p>
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
		</fieldset>
	</form>
</div>
