<script lang="ts">
	import ProductCard from '../../../lib/components/shop/ProductCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const products = data.products;
</script>

<div class="grid grid-cols-4">
	{#each products as product}
		<ProductCard name={product.name} image={product.thumbnail} price={product.price / 100} />
	{/each}
</div>
