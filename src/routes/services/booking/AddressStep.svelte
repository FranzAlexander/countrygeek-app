<script lang="ts">
	export let currentStep: number;
	export let streetAddress: string;
	export let postcode: string;
	export let suburb: string;

	export let streetError: {};
	export let postcodeError: {};
	export let suburbError: {};
</script>

<fieldset class="mt-2 flex w-full flex-col {currentStep === 3 ? '' : 'hidden'}">
	<legend class="mb-4 text-lg font-medium leading-none text-gray-900">Address Details</legend>

	<div class="mb-6">
		<label for="countries" class="mb-2 block font-medium text-gray-900">Select a country</label>
		<select
			name="countries"
			id="countries"
			class="apperance-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accent focus:ring-primary-20"
		>
			<option value="AU" selected>Australia</option>
		</select>
	</div>

	<div class="mb-6">
		<label
			for="streetAddress"
			class="mb-2 block font-medium {streetError ? 'text-red-700' : 'text-gray-900'}"
			>Street Address</label
		>
		<input
			type="text"
			name="streetAddress"
			id="streetAddress"
			autocomplete="street-address"
			class="block w-full rounded-lg border {streetError
				? 'border-red-500 bg-red-50 text-red-900'
				: 'border-gray-300 bg-gray-50  text-gray-900'}
		 focus:border-accent focus:ring-primary-20"
			placeholder="e.g. 4 Steer Street"
			value={streetAddress}
		/>
		{#if streetError}
			<p class="block font-medium text-red-600">{streetError}</p>
		{/if}
	</div>

	<div class="mb-6 flex flex-wrap justify-between">
		<div>
			<label
				for="postcode"
				class="mb-2 block font-medium {postcodeError ? 'text-red-700' : 'text-gray-900'}"
				>Postcode</label
			>
			<input
				type="text"
				name="postcode"
				id="postcode"
				class="block w-full rounded-lg border {postcodeError
					? 'border-red-500 bg-red-50 text-red-900'
					: 'border-gray-300 bg-gray-50  text-gray-900'} focus:border-accent focus:ring-primary-20"
				placeholder="e.g. 6255"
				value={postcode}
				autocomplete="postal-code"
			/>
			{#if postcodeError}
				<p class="block font-medium text-red-600">{postcodeError}</p>
			{/if}
		</div>
		<div>
			<label for="state" class="mb-2 block font-medium text-gray-900">State</label>
			<select
				name="state"
				id="state"
				class="apperance-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accent focus:ring-primary-20"
			>
				<option value="WA" selected>WA</option>
			</select>
		</div>
		<div>
			<label
				for="suburb"
				class="mb-2 block font-medium {suburbError ? 'text-red-700' : 'text-gray-900'}"
				>Suburb</label
			>
			<input
				type="text"
				name="suburb"
				id="suburb"
				class="block w-full rounded-lg border {suburbError
					? 'border-red-500 bg-red-50 text-red-900'
					: 'border-gray-300 bg-gray-50  text-gray-900'} focus:border-accent focus:ring-primary-20"
				placeholder="e.g. Bridgetown"
				value={suburb}
			/>
			{#if suburbError}
				<p class="block font-medium text-red-600">{suburbError}</p>
			{/if}
		</div>
	</div>
</fieldset>
