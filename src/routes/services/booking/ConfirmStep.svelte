<script lang="ts">
	export let currentStep: number;
	export let error: {};
</script>

<div class="mb-4 flex w-full flex-col {currentStep === 4 ? '' : 'hidden'}">
	{#if error}
		<p class="block font-medium text-red-600">{error}</p>
	{/if}
	<p class="mb-6 block font-medium text-gray-900">
		After booking the service we will get back to you within 2 business days to set a time and date.
	</p>
	<p class="block font-medium text-gray-900">
		By clicking Confirm you are agreeing the <a
			href="/legal/terms-and-conditions"
			class="text-primary underline"
		>
			Terms &amp; Conditions.</a
		>
	</p>
</div>
