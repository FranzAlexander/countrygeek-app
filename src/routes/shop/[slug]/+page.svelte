<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';

	export let data;
</script>

<section>
	<h2 class="mb-4 mt-2 text-xl font-bold dark:text-white sm:text-3xl">
		{data.categoryName}
	</h2>

	<div class="w-full border-b border-t border-gray-200 p-2">s</div>
	<!-- <div>
		{#each data.products as product}
			<ProductCard name={product.name} image={product.image[0]} price={100} />
		{/each}
	</div> -->
</section>
