<script lang="ts">
	export let fullname: string;
	export let phone: string;
	let disabled = true;
	function toggleEdit() {
		disabled = disabled ? false : true;
	}
</script>

<fieldset
	class="mb-10 flex w-full max-w-sm flex-col items-center rounded-lg border-2 border-gray-300 bg-secondary text-gray-900 shadow-md shadow-black md:mx-auto md:max-w-md md:p-4 xl:max-w-xl"
>
	<div class="mb-4 flex w-full items-center justify-between border-b-2 border-gray-400 p-2">
		<legend class=" text-lg font-medium leading-none text-gray-900">Personal Details</legend>
		<button
			type="button"
			class="foucs:ring-primary-20 mb-2 mr-2 rounded-lg bg-primary p-2 px-5 py-2.5 text-sm font-medium text-secondary hover:bg-accent focus:ring-4 {disabled
				? ''
				: 'hidden'}"
			on:click={toggleEdit}>Edit</button
		>
	</div>
	<div class="mb-4 w-full border-b-2 border-gray-300 p-1 pb-6">
		<label for="fullname" class="mb-2 block font-medium">Fullname</label>
		<input
			type="text"
			name="fullname"
			id="fullname"
			class="block w-full rounded-lg border focus:border-accent focus:ring-primary-20"
			autocomplete="name"
			placeholder="e.g. John Doe"
			value={fullname}
			{disabled}
		/>
	</div>
	<div class="mb-4 w-full p-1 pb-2">
		<label for="phone" class="mb-2 block font-medium">Phone Number</label>
		<input
			type="tel"
			name="phone"
			id="phone"
			class="block w-full rounded-lg border focus:border-accent focus:ring-primary-20"
			value={phone}
			autocomplete="mobile"
			placeholder="e.g. 0434-578-586"
			{disabled}
		/>
	</div>

	{#if !disabled}
		<div class="flex w-full justify-end gap-10 border-t-2 border-gray-300 py-2">
			<button
				type="button"
				class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
				on:click={toggleEdit}>Cancel</button
			>
			<button
				formaction="?/updatePersonalDetails"
				type="submit"
				class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary-20"
				>Save</button
			>
		</div>
	{/if}
</fieldset>
