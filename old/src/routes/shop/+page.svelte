<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products;

	console.log(products);
</script>

<main>
	{#each products as product}
		<Card
			product={{
				name: product.name,
				descripiton: product.descripiton,
				image: product.images[0],
				amount: '100'
			}}
		/>
	{/each}
	<!-- <Card product={{ name: products }} /> -->
</main>
