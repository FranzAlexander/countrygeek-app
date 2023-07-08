<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	export let width: number;
	export let length: number;
	export let height: number;
	export let weight: number;
</script>

<div
	class="aspect-w-1 aspect-h-1 overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
>
	<div class="p-6 sm:p-8">
		<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
			Product Shipping
		</h1>
		<div class="mt-6 space-y-6">
			<NumberInput name={'length'} label={'Length'} placeholder={''} value={length} />
			<NumberInput name={'width'} label={'Width'} placeholder={''} value={width} />
			<NumberInput name={'height'} label={'Height'} placeholder={''} value={height} />
			<NumberInput name={'weight'} label={'Weight'} placeholder={''} value={weight} />
		</div>
	</div>
</div>
