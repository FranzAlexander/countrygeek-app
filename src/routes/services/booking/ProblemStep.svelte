<script lang="ts">
	export let categoryName: string;
	export let serviceName: string;
	export let description: string;
	export let error: string | unknown;
	export let currentStep: number;
</script>

<fieldset class="mt-2 flex w-full flex-col {currentStep === 1 ? '' : 'hidden'}">
	<legend class="mb-4 text-lg font-medium leading-none text-gray-900">Problem Details</legend>
	<input type="text" hidden value={categoryName} />
	<input type="text" hidden value={serviceName} />

	<div class="mb-6">
		<label for="bookingDescription" class="mb-2 block font-medium text-gray-900"
			>Tell us about your problem:</label
		>
		<textarea
			name="bookingDescription"
			id="bookingDescription"
			rows="5"
			class="focus:border-country-geek-accent mb-2 block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-accent"
			placeholder="Write a brief description of the problem "
			bind:value={description}
		/>
		{#if error}
			<p>{error}</p>
		{/if}
	</div>
</fieldset>
