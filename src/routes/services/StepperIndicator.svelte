<script lang="ts">
	export let currentStep: number;
</script>

<div class="mb-4 flex justify-center">
	<div class="flex items-center">
		<div class="mr-4 flex flex-col items-center">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-country-geek-test-accent font-semibold text-country-geek-white {currentStep >=
				1
					? 'opacity-100'
					: 'opacity-50'}"
			>
				1
			</div>
			<span
				class="mt-2 text-sm font-medium {currentStep >= 1
					? 'text-country-geek-white'
					: 'text-gray-400'}">Problem Details</span
			>
		</div>
		<div class="mr-4 flex flex-col items-center">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-country-geek-test-accent  font-semibold text-country-geek-white opacity-100 {currentStep >=
				2
					? 'opacity-100'
					: 'opacity-50'}"
			>
				2
			</div>
			<span
				class="mt-2 text-sm font-medium {currentStep >= 2
					? 'text-country-geek-white'
					: 'text-gray-400'}">Personal Details</span
			>
		</div>
		<div class="flex flex-col items-center">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-country-geek-test-accent  font-semibold text-country-geek-white opacity-100 {currentStep >=
				3
					? 'opacity-100'
					: 'opacity-50'}"
			>
				3
			</div>
			<span
				class="mt-2 text-sm font-medium {currentStep >= 3
					? 'text-country-geek-white'
					: 'text-gray-400'}">Address Details</span
			>
		</div>
		<div class="flex flex-col items-center">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-country-geek-test-accent  font-semibold text-country-geek-white opacity-100 {currentStep >=
				4
					? 'opacity-100'
					: 'opacity-50'}"
			>
				4
			</div>
			<span
				class="mt-2 text-sm font-medium {currentStep >= 4
					? 'text-country-geek-white'
					: 'text-gray-400'}">Confirm Details</span
			>
		</div>
	</div>
</div>
