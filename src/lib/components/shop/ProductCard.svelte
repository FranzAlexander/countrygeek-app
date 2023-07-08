<script lang="ts">
	import type { AddCartItem } from '$lib/interfaces/cart';
	import type { ProductDisplay } from '$lib/interfaces/product';
	import { encodeURIHyphen } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let productDisplay: ProductDisplay;
	export let categoryName: string;
	export let subCategoryName: string;

	const dispatch = createEventDispatcher();

	/**
	 * Add the product to the cart
	 */
	async function addToCart() {
		const cartItem: AddCartItem = { productId: productDisplay.sku, quantity: 1 };

		const cartResponse = await fetch('/api/cart', {
			method: 'POST',
			body: JSON.stringify(cartItem),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		let newCartItem = await cartResponse.json();

		newCartItem.quantity = 1;

		dispatch('addToCart', newCartItem);
	}
</script>

<!-- Product Card -->
<section
	class="relative max-w-sm overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-600 hover:shadow-blue-400"
>
	<!-- Product Image -->
	<figure>
		<a
			href="/shop/{encodeURIHyphen(categoryName)}/{encodeURIHyphen(
				subCategoryName
			)}/{encodeURIComponent(
				productDisplay.name.replace(/\s+/g, '-').concat('-').concat(productDisplay.sku)
			)}"
			class="aspect-square overflow-hidden"
		>
			<img
				src={productDisplay.thumbnail}
				alt={productDisplay.name}
				class="relative h-full w-full bg-gradient-to-bl from-[#a0d8f1] to-[#006666] object-contain p-2"
			/>
		</a>
	</figure>
	<div class="px-6 py-4">
		<!-- Product Name -->
		<h2 class="mb-4 font-heading text-lg font-bold text-gray-900">{productDisplay.name}</h2>
		<!-- Product Model -->
		<p class="mb-2 w-min rounded-full bg-gray-400 p-1 font-sans text-xs text-gray-900">
			{productDisplay.model}
		</p>
		<div class="flex justify-between">
			<!-- Product Price -->
			<span
				class="mb-2 mr-2 inline-block rounded-full px-3 py-1 font-sans font-semibold text-gray-900"
				>${productDisplay.price}</span
			>
			<!-- Add to Cart Button -->
			<button
				type="button"
				class="text-xm mb-2 rounded-lg bg-[#008080] px-3 py-1 font-body font-semibold text-white hover:bg-[#009999]"
				on:click={addToCart}
			>
				Add to cart
			</button>
		</div>
	</div>
</section>
