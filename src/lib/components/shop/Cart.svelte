<script lang="ts">
	import type { CartItem } from '$lib/interfaces/shop';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	const cart: Writable<CartItem[]> = getContext('cart');

	let showCart = false;

	export const toggleCart = () => {
		showCart = !showCart;
	};
</script>

<div class="fixed right-3 z-50 w-96 rounded bg-white {showCart === true ? '' : 'hidden'}">
	<ul class="flex flex-col">
		{#each $cart as item}
			<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div class="flex w-full space-x-2 sm:space-x-4">
					<img
						src={item.productImage}
						alt={item.productName}
						class="h-20 w-20 flex-shrink-0 rounded object-cover outline-none sm:h-28 sm:w-28"
					/>
					<p>{item.productName}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
