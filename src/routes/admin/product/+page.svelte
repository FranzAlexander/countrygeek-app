<script lang="ts">
	import { enhance } from '$app/forms';
	import ProductDetailsCont from '$lib/components/admin/ProductDetailsCont.svelte';
	import ProductDetails from '$lib/components/admin/ProductDetails.svelte';

	import type { PageServerData } from './$types';
	import ProductSupplier from '$lib/components/admin/ProductSupplier.svelte';
	import ProductImage from '$lib/components/admin/ProductImage.svelte';
	import ProductSpecs from '$lib/components/admin/ProductSpecs.svelte';
	import ProductShipping from '$lib/components/admin/ProductShipping.svelte';
	import { onMount } from 'svelte';
	import type { AddSpec, ProductAdd, Spec } from '$lib/interfaces/admin';
	import Dropdown from '$lib/components/admin/Dropdown.svelte';

	export let data: PageServerData;

	onMount(async () => {
		data?.specValues.unshift({ id: -1, name: 'Null' });
	});

	let fileContents: ProductAdd[] = [];
	$: selectedProduct = {} as ProductAdd;
	let productSpecs: { [key: string]: string } = {};
	let matchingSpecs: AddSpec[] = [];

	type Filter = {
		id: number;
	};
	let currentFilters: Filter[] = [];
	onMount(() => {
		fileContents = [];
	});

	function handleDrop(event: DragEvent) {
		event.preventDefault();

		const file = event.dataTransfer?.items[0].getAsFile();
		const reader = new FileReader();

		reader.onload = (event) => {
			const result = event?.target?.result as string;
			fileContents = JSON.parse(result);
		};

		if (file) {
			reader.readAsText(file);
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}

	function selectProduct(sku: string) {
		const product = fileContents.find((item) => item.ManufacturerSKU === sku);

		selectedProduct = product ?? ({} as ProductAdd);
		productSpecs = selectedProduct?.ProductName2?.specs || {};

		let specsMatched: AddSpec[] = [];

		data?.specs.forEach((spec: Spec) => {
			if (productSpecs.hasOwnProperty(spec.name)) {
				specsMatched.push({
					specId: spec.id,
					name: spec.name,
					value: productSpecs[spec.name]
				});
			}
		});

		matchingSpecs = specsMatched;
	}

	// Add a new filter to the array
	function addFilter() {
		const newFilter: Filter = { id: 0 };
		currentFilters = [...currentFilters, newFilter];
	}

	// Remove a filter from the array
	function removeFilter(id: number) {
		currentFilters = currentFilters.filter((filter) => filter.id !== id);
	}
</script>

<div
	on:drop={handleDrop}
	on:dragover={handleDragOver}
	class="flex h-60 w-60 items-center justify-center rounded-lg border-2 border-black"
>
	Drop file here
</div>

<div class="mt-5 flex flex-wrap">
	{#each fileContents as { ManufacturerSKU: sku } (sku)}
		<button
			class="m-1 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			on:click={() => selectProduct(sku)}
		>
			{sku}
		</button>
	{/each}
</div>

<section class="bg-gray-100 py-2">
	<form method="post" use:enhance class="flex flex-col gap-2" enctype="multipart/form-data">
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
			<ProductDetails
				productName={selectedProduct.ProductName ?? ''}
				productDescription={selectedProduct.ProductName2?.Product ?? ''}
				warranty={selectedProduct.WarrantyLength ?? ''}
			/>

			<ProductDetailsCont
				brands={data?.brands}
				categories={data?.categories}
				model={selectedProduct?.ManufacturerSKU}
				pubDate={selectedProduct?.pubDate}
			/>
			<ProductSupplier suppliers={data?.suppliers} productCode={selectedProduct?.StockCode ?? ''} />

			<div
				class="max-h-screen overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="p-6 sm:p-8">
					<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
						Product Specs
					</h1>
					<div class="mt-6 space-y-6">
						{#each matchingSpecs as spec, i (i)}
							<div class="space-y-2 rounded-lg border border-gray-300 p-2">
								<div>
									<label
										for="specId"
										class="mb-2 block font-sans text-sm font-medium text-gray-900 dark:text-white"
										>{spec.name}</label
									>
									<input
										type="text"
										id="specId"
										name={`spec-id-${i}`}
										value={spec.specId}
										class="hidden"
									/>
								</div>
								<div>
									<label
										for="specValue"
										class="mb-2 block font-sans text-sm font-medium text-gray-900 dark:text-white"
										>Value</label
									>
									<input
										type="text"
										class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-sans text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
										id="specValue"
										name={`spec-value-${i}`}
										value={spec.value}
									/>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-evenly">
			<div
				class="max-h-screen overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="space-y-2 p-6 sm:p-8">
					{#each currentFilters as filter, i (i)}
						<Dropdown
							name={`spec-filter-id-${i}`}
							label={'Spec Filter'}
							values={data?.specValues}
						/>
						<Dropdown name={`spec-filter-s-id-${i}`} label={'Spec'} values={data?.specs} />
						<button
							type="button"
							class="mt-6 block w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							on:click={() => {
								removeFilter(currentFilters[i].id);
							}}
						>
							Del -
						</button>
					{/each}
					<button
						type="button"
						class="mt-6 block w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						on:click={addFilter}
					>
						Add +
					</button>
				</div>
			</div>
			<ProductImage />
			<ProductShipping
				width={Number(selectedProduct?.Width)}
				length={Number(selectedProduct?.Length)}
				height={Number(selectedProduct?.Height)}
				weight={Number(selectedProduct?.Weight)}
			/>
		</div>
		<button
			type="submit"
			class="mt-6 block w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Add Product</button
		>
	</form>
</section>
