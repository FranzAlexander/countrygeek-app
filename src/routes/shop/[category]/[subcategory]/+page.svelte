<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import SubCategoryList from '$lib/components/shop/SubCategoryList.svelte';
	import Filter from '$lib/components/shop/Filter.svelte';
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
	const products = data.products;
	const subCategories = data.subCategories;

	$: currentFilters = Array<string>(); //string array

	function addFilter(event: CustomEvent<string>) {
		const specValue = event.detail;
		if (!currentFilters.includes(specValue)) {
			currentFilters.push(event.detail);
		}
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
			<div>s</div>
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
					<div class=" flex">
						<span class="">100</span>
					</div>
				</div>
				<div>
					<Filter filters={data.specFilters} on:newFilter={addFilter} />
				</div>
				<!-- <div>
					<label for="filter" class="sr-only">Filter</label>
					<select
						name="filter"
						id="filter"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					>
						{#each data.specFilters as filter}
							<option class="bg-[#a0d8f1]">{filter.specName}</option>
							{#each filter.specOption as specOption}
								<option value="" class="flex justify-between w-full"
									><span>{specOption.specValue}</span><span>({specOption.specCount})</span></option
								>
							{/each}
						{/each}
					</select>
				</div> -->
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
	<!-- <div class="flex">
		<div class="flex flex-col">
			<h1 class="order-1 block p-2 text-2xl font-semibold tracking-tight text-gray-900">
				{data.categoryName}
			</h1>
			<SubCategoryList categoryName={data.categoryName} {subCategories} />
		</div>
	</div> -->
	<!-- <div class="flex justify-between gap-4 border-b border-gray-300 pb-2">
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
				<div class=" flex">
					<span class="">100</span>
				</div>
			</div>
			<div>
				<label for="filter" class="sr-only">Filter</label>
				<select
					name="filter"
					id="filter"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				>
					<option>Filter</option>
				</select>
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
	<div class="grid grid-cols-4 p-2">
		{#each products as product}
			<ProductCard productDisplay={product} categoryName={data.categoryName} />
		{/each}
	</div> -->
</section>
