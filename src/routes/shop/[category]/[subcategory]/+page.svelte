<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import SubCategoryList from '$lib/components/shop/SubCategoryList.svelte';
	import Filter from '$lib/components/shop/Filter.svelte';
	import { each, getContext } from 'svelte/internal';
	import type { PageData } from './$types';
	import FilterChip from '$lib/components/shop/FilterChip.svelte';
	import type { CartItem, Product, ProductDisplay } from '$lib/interfaces/shop';
	import type { Writable } from 'svelte/store';

	export let data: PageData;
	const products: ProductDisplay[] = data.products;
	const subCategories = data.subCategories;

	$: currentFilters = Array<string>(); //string array
	let shoppingCart: Writable<CartItem[]> = getContext('cart');

	function addFilter(event: CustomEvent<string>) {
		const specValue = event.detail;
		if (!currentFilters.includes(specValue)) {
			currentFilters = [...currentFilters, specValue];
		}
	}

	function removeFilter(event: CustomEvent<string>) {
		currentFilters = currentFilters.filter((value) => value !== event.detail);
	}

	async function addToCart(event: CustomEvent<{ productName: string; productQuantity: number }>) {
		const productIndex = products.findIndex((item) => item.name === event.detail.productName);

		const productToAdd = {
			productSku: products[productIndex].sku,
			productQuantity: event.detail.productQuantity
		};

		// await fetch('/api/cart', {
		// 	method: 'POST',
		// 	body: JSON.stringify(productToAdd),
		// 	headers: {
		// 		'Content-Type': 'Application/json'
		// 	}
		// });

		// const itemIndex = $shoppingCart
		// 	.findIndex
		// 	// (item) => item.productName === event.detail.productName
		// 	();
	}
</script>

<section class="flex flex-col py-2">
	<div class="flex items-center justify-between">
		<div class="flex flex-col">
			<h1 class="block p-2 text-2xl font-semibold tracking-tight text-gray-900">
				{data.categoryName}
			</h1>
			<SubCategoryList categoryName={data.categoryName} {subCategories} />
		</div>
		<div class="flex flex-col">
			<div class="min-h-10 flex p-2">
				{#each currentFilters as filter}
					<FilterChip chipName={filter} on:removeFilter={removeFilter} />
				{/each}
			</div>
			<div class="flex gap-4">
				<div class="flex items-center">
					<span class="mr-2">0</span>

					<input
						type="range"
						min="0"
						max="100"
						step="1"
						class="h-2 w-full appearance-none rounded-lg bg-gray-300 outline-none"
					/>
					<div class="flex">
						<span class="">100</span>
					</div>
				</div>
				<div>
					<Filter filters={data.specFilters} on:newFilter={addFilter} />
				</div>

				<div class="mr-4">
					<label for="sortBy" class="sr-only">Sort</label>
					<select
						name="sortBy"
						id="sortBy"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					>
						<option>Sort</option>
					</select>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-5 grid grid-cols-4 p-2">
		{#each products as product}
			<ProductCard
				productDisplay={product}
				categoryName={data.categoryName}
				subCategoryName={'all'}
				on:addToCart={addToCart}
			/>
		{/each}
	</div>
</section>
