<script lang="ts">
	import { applyAction, enhance } from '$app/forms';

	// Importing necessary interfaces
	import type { User } from '$lib/interfaces/user';
	import type { ActionData, PageData, SubmitFunction } from './$types';
	import AddressStep from './AddressStep.svelte';
	import PersonalStep from './PersonalStep.svelte';
	import ProblemStep from './ProblemStep.svelte';
	import StepIndicator from './StepIndicator.svelte';

	// Declaring the page data
	export let data: PageData;
	export let form: ActionData;

	const { session, selectedService, userDetails } = data;

	// Declaring variables for user information
	let user: User | null = userDetails ?? null;

	// Setting up variables for form
	let currentStep = 1; // The current step of the form
	let nextStepDisabled = [true, true, true]; // The array of whether the next button is disabled for each step

	// let formElements: Element[] = [];

	// Setting up variables for user input
	$: description = '';
	$: fullname = user?.fullname ?? '';
	$: email = session?.user.email ?? '';
	$: phone = user?.phone ?? '';
	$: streetAddress = user?.userAddress?.[0]?.streetAddress ?? '';
	$: city = user?.userAddress?.[0]?.city ?? '';
	$: postcode = user?.userAddress?.[0]?.postcode ?? '';

	// Function to check if the inputs are valid
	function checkInputs() {
		// Checking the inputs for the current step
		switch (currentStep) {
			case 1:
				nextStepDisabled[0] = description === '';
				break;
			case 2:
				nextStepDisabled[1] = fullname === '' || email === '' || phone === '';
				break;
			case 3:
				nextStepDisabled[2] = streetAddress === '' || city === '' || postcode === '';
				break;
		}
	}

	// Function to go to the next step
	function nextStep() {
		if (currentStep < 4) {
			// If not at the last step
			currentStep += 1; // Move to the next step
			// formElements[currentStep - 1].scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Function to go to the previous step
	function prevStep() {
		if (currentStep > 1) {
			// If not at the first step
			currentStep -= 1; // Move to the previous step
			// formElements[currentStep - 1].scrollIntoView({ behavior: 'smooth' });
		}
	}

	const handleSubmit: SubmitFunction = ({}) => {
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await applyAction(result);
			} else {
				if (result.type === 'failure') {
					if (result.data) {
						const data = result.data;
						console.log('hi');
						console.log(data);
						currentStep = data.stepError;
					}

					await applyAction(result);
				}
			}
		};
	};
</script>

<!-- class="flex max-w-sm flex-col gap-4 bg-primary pt-4 md:max-w-md md:items-center md:justify-center xl:max-w-xl" -->

<section class="w-full bg-primary p-1">
	<form
		method="POST"
		class="flex w-full max-w-sm flex-col items-center rounded-lg border-2 border-gray-300 bg-secondary p-2 text-gray-900 shadow-md shadow-black md:mx-auto md:max-w-md md:p-4 xl:max-w-xl"
		use:enhance={handleSubmit}
	>
		<StepIndicator {currentStep} />

		<ProblemStep
			categoryName={selectedService.categoryName ?? form?.data?.categoryName}
			serviceName={selectedService.serviceName ?? form?.data?.serviceName}
			description={form?.data?.bookingDescription ?? ''}
			error={form?.errors?.description ?? ''}
			{currentStep}
		/>

		<PersonalStep
			{currentStep}
			fullname={fullname ?? form?.data?.fullname}
			email={email ?? form?.data?.email}
			phone={phone ?? form?.data?.phone}
			fullnameError={form?.errors?.fullname ?? ''}
			emailError={form?.errors?.email ?? ''}
			phoneError={form?.errors?.phone ?? ''}
		/>

		<AddressStep
			{currentStep}
			streetAddress={streetAddress ?? form?.data?.streetAddress}
			postcode={postcode ?? form?.data?.postcode}
			suburb={city ?? form?.data?.city}
		/>

		<div class="flex w-full justify-end gap-10">
			<button
				type="button"
				class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
				on:click={prevStep}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					viewBox="0 96 960 960"
					width="48"
					class="mr-2 h-5 w-5 fill-secondary"
					><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z" /></svg
				>Back</button
			>
			{#if currentStep < 4}
				<button
					type="button"
					class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
					on:click={nextStep}
					>Next
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="48"
						viewBox="0 96 960 960"
						width="48"
						class="ml-2 h-5 w-5 fill-secondary"
						><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z" /></svg
					></button
				>
			{:else}
				<button
					type="submit"
					class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
					>Confirm
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="48"
						viewBox="0 96 960 960"
						width="48"
						class="ml-2 h-5 w-5 fill-secondary"
						><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg
					>
				</button>
			{/if}
		</div>

		<!-- <div class="mt-10 flex w-full flex-col justify-evenly gap-5">
			<button
				class="bg-country-geek-blue text-country-geek-white rounded-lg p-2 disabled:opacity-50"
				type="button"
				disabled={currentStep === 1}
				on:click={prevStep}>Back</button
			>
			<button
				class="bg-country-geek-blue text-country-geek-white rounded-lg p-2"
				type="button"
				on:click={nextStep}>Next</button
			>
		</div> -->
	</form>
</section>
