<script lang="ts">
	import type { UserAddress } from '$lib/interfaces/user';

	export let userAddress: UserAddress[];

	let disabled = true;

	function toggleEdit() {
		disabled = disabled ? false : true;
	}
</script>

<fieldset
	class="mb-10 flex w-full max-w-sm flex-col items-center rounded-lg border-2 border-gray-300 bg-secondary text-gray-900 shadow-md shadow-black md:mx-auto md:max-w-md md:p-4 xl:max-w-xl"
>
	<div class="mb-4 flex w-full items-center justify-between border-b-2 border-gray-400 p-2">
		<legend class=" text-lg font-medium leading-none text-gray-900">Address Details</legend>
		<button
			type="button"
			class="foucs:ring-primary-20 mb-2 mr-2 rounded-lg bg-primary p-2 px-5 py-2.5 text-sm font-medium text-secondary hover:bg-accent focus:ring-4 {disabled
				? ''
				: 'hidden'}"
			on:click={toggleEdit}>Edit</button
		>
	</div>
	<div class="mb-6 w-full p-1">
		<label for="countries" class="mb-2 block font-medium text-gray-900">Select a country</label>
		<select
			name="countries"
			id="countries"
			class="apperance-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accent focus:ring-primary-20"
			{disabled}
		>
			<option value="AU" selected>Australia</option>
		</select>
	</div>
	<div class="mb-4 w-full border-b-2 border-gray-300 p-1 pb-6">
		<label for="profileName" class="mb-2 block font-medium">Street address</label>
		<input
			type="text"
			name="profileName"
			id="profileName"
			class="block w-full rounded-lg border focus:border-accent focus:ring-primary-20"
			autocomplete="street-address"
			placeholder="e.g. 4 Steer Street"
			value={userAddress[0].streetAddress}
			{disabled}
		/>
	</div>
	<div class="mb-6 flex w-full flex-wrap justify-between p-1">
		<div>
			<label for="postcode" class="mb-2 block font-medium text-gray-900">Postcode</label>
			<input
				type="text"
				name="postcode"
				id="postcode"
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-accent focus:ring-primary-20"
				pattern="[0-9]{5}"
				max="5"
				placeholder="e.g. 6255"
				value={userAddress[0].postcode}
				{disabled}
			/>
		</div>
		<div>
			<label for="state" class="mb-2 block font-medium text-gray-900">State</label>
			<select
				name="state"
				id="state"
				class="apperance-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accent focus:ring-primary-20"
				{disabled}
			>
				<option value="WA" selected>WA</option>
			</select>
		</div>
		<div>
			<label for="suburb" class="mb-2 block font-medium text-gray-900">Suburb</label>
			<input
				type="text"
				name="suburb"
				id="suburb"
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-accent focus:ring-primary-20"
				placeholder="e.g. Bridgetown"
				value={userAddress[0].city}
				{disabled}
			/>
		</div>
	</div>
	<!-- <div class="mb-4 w-full pb-2">
		<label for="profileName" class="mb-2 block font-medium">Phone Number</label>
		<input
			type="tel"
			name="profilePhone"
			id="profilePhone"
			class="block w-full rounded-lg border focus:border-accent focus:ring-primary-20"
			value={phone}
            autocomplete="mobile"
			{disabled}
		/>
	</div> -->

	{#if !disabled}
		<div class="flex w-full justify-end gap-10 border-t-2 border-gray-300 py-2">
			<button
				type="button"
				class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
				on:click={toggleEdit}>Cancel</button
			>
			<button
				formaction="?/updateAddressDetails"
				type="submit"
				class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
				>Save</button
			>
		</div>
	{/if}
</fieldset>
