<script lang="ts">
	import type { AddCartItem } from '$lib/interfaces/cart';
	import type { CartItem, ProductDisplay } from '$lib/interfaces/shop';
	import { createEventDispatcher } from 'svelte';

	export let productDisplay: ProductDisplay;
	export let categoryName: string;
	export let subCategoryName: string;

	const dispatch = createEventDispatcher();

	async function addToCart() {
		const cartItem: AddCartItem = { productId: productDisplay.sku, quantity: 1 };

		await fetch('/api/cart', {
			method: 'POST',
			body: JSON.stringify(cartItem),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		dispatch('addToCart', {
			productName: productDisplay.name,
			productQuantity: 1
		});
	}
</script>

<div
	class="relative max-w-sm overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-600 hover:shadow-blue-400"
>
	<a
		href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
			subCategoryName
		).replace(/\s+/g, '-')}/{encodeURIComponent(
			productDisplay.name.replace(/\s+/g, '-').concat('-').concat(productDisplay.sku)
		)}"
		class="overflow-hidden"
	>
		<img
			src={productDisplay.thumbnail}
			alt={productDisplay.name}
			class="relative h-64 w-full bg-gradient-to-bl from-[#a0d8f1] to-[#006666] object-contain"
		/>
	</a>
	<div class="px-6 py-4">
		<h2 class="mb-4 text-lg font-bold text-gray-900">{productDisplay.name}</h2>
		<p class="mb-2 w-min rounded-full bg-gray-400 p-1 text-xs text-gray-900">
			{productDisplay.model}
		</p>
		<div class="flex justify-between">
			<span class="mb-2 mr-2 inline-block rounded-full px-3 py-1 font-semibold text-gray-900"
				>${productDisplay.price}</span
			>
			<button
				type="button"
				class="text-xm mb-2 rounded-lg bg-[#008080] px-3 py-1 font-semibold text-white hover:bg-[#009999]"
				on:click={addToCart}>Add to cart</button
			>
		</div>
	</div>
</div>
