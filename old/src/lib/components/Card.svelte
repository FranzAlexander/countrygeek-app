<script lang="ts">
	import type { ProductCard } from '$lib/interfaces/shop';

	export let product: ProductCard;
</script>

<div
	class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
>
	<a href="">
		<div>
			<img src={product.image} alt="#" class="rounded-t-lg p-8" />
		</div>
		<div class="px-5 pb-5">
			<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{product.name}
			</h5>
			<div class="flex items-center justify-between">
				<span class="text-3xl font-bold text-gray-900 dark:text-white">${product.amount}</span>
			</div>
		</div></a
	>
</div>
