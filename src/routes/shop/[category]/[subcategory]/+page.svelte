<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const products = data.products;
	const subCategories = data.subCategories;
</script>

<section class="flex flex-col py-2">
	<h1 class="block p-2 text-2xl font-semibold tracking-tight text-gray-900">{data.categoryName}</h1>
	<div class="flex justify-between border-b border-gray-300 pb-2">
		<div class="flex w-full max-w-md flex-wrap justify-evenly">
			{#each subCategories as sub (sub.id)}
				<a href="#">{sub.name}</a>
			{/each}
		</div>
		<div>
			<label for="sortBy" class="sr-only">Sort</label>
			<select
				name="sortBy"
				id="sortBy"
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			>
				<option>Sort by</option>
			</select>
		</div>
	</div>
	<div class="grid grid-cols-4 p-2">
		{#each products as product}
			<ProductCard productDisplay={product} categoryName={data.categoryName} />
		{/each}
	</div>
</section>
