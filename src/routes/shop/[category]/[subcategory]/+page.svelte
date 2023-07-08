<script lang="ts">
	import type { ProductDisplay } from '$lib/interfaces/product';
	import type { CartStore } from '$lib/store/cart';
	import { getContext } from 'svelte';
	import type { PageData } from './$types';
	import type { CartItem } from '$lib/interfaces/cart';
	import FilterChip from '$lib/components/shop/FilterChip.svelte';
	import SubCategoryList from '$lib/components/shop/SubCategoryList.svelte';
	import Filter from '$lib/components/shop/Filter.svelte';
	import ProductCard from '$lib/components/shop/ProductCard.svelte';

	export let data: PageData;

	let products: ProductDisplay[] = [];
	let subCategoryName = '';

	let shoppingCart: CartStore = getContext('cart');

	$: {
		products = data.products;
		subCategoryName = data.subCategory;
	}

	$: currentFilters = Array<string>();

	/**
	 * Add a filter to the current filters list
	 */
	function addFilter(event: CustomEvent<string>) {
		const specValue = event.detail;
		if (!currentFilters.includes(specValue)) {
			currentFilters = [...currentFilters, specValue];
		}
	}

	/**
	 * Remove a filter from the current filters list
	 */
	function removeFilter(event: CustomEvent<string>) {
		currentFilters = currentFilters.filter((value) => value !== event.detail);
	}

	/**
	 * Add a product to the cart
	 */
	async function addToCart(event: CustomEvent<CartItem>) {
		shoppingCart.addToCart(event.detail);
	}
</script>

<section class="flex flex-col py-2">
	<div class="flex justify-between">
		<h1
			class="block p-2 font-heading text-2xl font-semibold tracking-tight text-gray-900"
			aria-label="Category Name"
		>
			{data.category?.name}
		</h1>
		<div class="flex p-2" aria-label="Applied Filters">
			{#each currentFilters as filter}
				<FilterChip chipName={filter} on:removeFilter={removeFilter} />
			{/each}
		</div>
	</div>
	<div class="flex justify-between">
		<SubCategoryList
			categoryName={data.category?.name ?? ''}
			subCategories={data?.category?.subCategories ?? []}
			currentSubCategory={subCategoryName}
		/>
		<div class="relative flex gap-4 px-2">
			<Filter filters={data.specFilters} on:newFilter={addFilter} />
		</div>
	</div>
	<div class="grid w-full grid-cols-2 justify-evenly gap-y-4 p-2 md:grid-cols-3 2xl:grid-cols-4">
		{#each products as product (product.sku)}
			<ProductCard
				categoryName={data?.category?.name ?? ''}
				{subCategoryName}
				productDisplay={product}
				on:addToCart={addToCart}
			/>
		{/each}
	</div>
</section>
