<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import TextInput from './TextInput.svelte';

	export let productName: string;
	export let productDescription: string;
	export let warranty: string;
</script>

<div
	class="aspect-w-1 aspect-h-1 flex overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
>
	<div class="p-6 sm:p-8">
		<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
			Product Details
		</h1>
		<div class="mt-6 space-y-6">
			<TextInput name="sku" label="Sku" placeholder="HA011025" value={''} />
			<TextInput name="productName" label="Product Name" placeholder="" value={productName} />
			<div>
				<label
					for="productDescription"
					class="block text-sm font-medium text-gray-900 dark:text-white">Description</label
				>
				<textarea
					name="productDescription"
					id="productDescription"
					cols="30"
					rows="5"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					value={productDescription}
				/>
			</div>
			<NumberInput name="productPrice" label="Price" placeholder="1000.23" value={0} />
			<TextInput name={'warranty'} label={'Warranty'} placeholder={''} value={warranty} />
		</div>
	</div>
</div>
