<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { CartStore } from '$lib/store/cart';

	// Get the cart from the Svelte context
	const cart: CartStore = getContext('cart');

	$: showCart = false;

	onMount(() => {
		if (showCart) {
			showCart = true;
		}
	});

	/**
	 * Toggles the visibility of the cart
	 */
	export const toggleCart = () => {
		showCart = !showCart;
	};

	async function updateCart(itemId: number, quantity: number) {
		await fetch('/api/cart', {
			method: 'PUT',
			body: JSON.stringify({ itemId: itemId, quantity: quantity }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	async function removeFromCart(itemId: number) {
		await fetch('/api/cart', {
			method: 'DELETE',
			body: JSON.stringify({ itemId: itemId }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	async function increaseQuantity(itemId: number, index: number) {
		cart.increaseQuantity(itemId);
		await updateCart(itemId, $cart[index].quantity);
	}

	async function decreaseQuantity(itemId: number, index: number) {
		cart.decreaseQuantity(itemId);
		await updateCart(itemId, $cart[index].quantity);
	}

	async function changeQuantity(itemId: number, index: number) {
		cart.changeQuantity(itemId, $cart[index].quantity);
		await updateCart(itemId, $cart[index].quantity);
	}

	async function removeItem(itemId: number) {
		cart.removeItem(itemId);
		await removeFromCart(itemId);
	}
</script>

<div
	class="absolute right-3 z-50 w-96 rounded-lg border border-gray-300 bg-white p-1.5 {showCart ===
	true
		? ''
		: 'hidden'}"
	role="dialog"
	aria-label="Shopping Cart"
>
	<ul class="flex flex-col divide-y">
		{#each $cart as item, i (item.itemId)}
			<li class="flex w-full space-x-2 py-2 sm:flex-row sm:justify-between sm:space-x-4">
				<img
					src={item.imageUrl}
					alt={item.productName}
					class="aspect-square h-20 w-20 flex-shrink-0 rounded object-cover outline-none sm:h-28 sm:w-28"
				/>
				<div class="flex flex-col">
					<p class="font-sans text-sm text-gray-600">{item.productName}</p>
					<p class="font-sans text-sm font-semibold text-gray-800">
						${(item.unitPrice / 100).toFixed(2)}
					</p>
					<div>
						<label for="quantity" class="sr-only">Quantity</label>
						<div class="flex items-center gap-1">
							<button
								type="button"
								on:click={async () => {
									await decreaseQuantity(item.itemId, i);
								}}
								class="h-10 w-10 font-body leading-10 text-gray-600 transition hover:text-gray-800 dark:text-gray-400"
							>
								&minus;
							</button>
							<input
								type="number"
								name="quantity"
								id="quantity"
								bind:value={item.quantity}
								on:blur={async () => {
									changeQuantity(item.itemId, i);
								}}
								min="0"
								class="h-10 w-16 rounded border border-gray-200 text-center [-moz-appearance:_textfield] dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
							/>
							<button
								type="button"
								on:click={async () => {
									await increaseQuantity(item.itemId, i);
								}}
								class="h-10 w-10 font-body leading-10 text-gray-600 transition hover:text-gray-800 dark:text-gray-400"
							>
								&plus;
							</button>
						</div>
					</div>

					<button
						type="button"
						class="absolute right-0 top-0 bg-gray-100 p-2 font-body text-lg leading-10"
						on:click={async () => {
							await removeItem(item.itemId);
						}}>&times;</button
					>
				</div>
			</li>
		{/each}
	</ul>
</div>
