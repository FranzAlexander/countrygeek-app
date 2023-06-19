<script lang="ts">
	import type { CartItem, ShopCategoryWithSub } from '../../lib/interfaces/shop';
	import type { LayoutData } from './$types';
	import { setContext } from 'svelte';

	import Cart from '$lib/components/shop/Cart.svelte';
	import { useStorage } from '$lib/store/useStorage';
	import type { Writable } from 'svelte/store';

	export let data: LayoutData;

	const categories: ShopCategoryWithSub[] = data?.categories ?? [];

	let showMenu = false;

	function showProductsMenu() {
		showMenu = !showMenu;
	}

	const cart: Writable<CartItem[]> = useStorage<CartItem[]>('shopping-cart', []);

	setContext('cart', cart);

	let cartComponent: Cart;

	function showCart() {
		cartComponent.toggleCart();
	}
</script>

<<<<<<< HEAD
<nav class="w-full bg-secondary border-b border-gray-300">
	<div class="mx-auto max-w-screen-2xl px-4">
		<ul class="mr-6 mt-0 flex flex-row space-x-8 font-medium">
			<li class="relative">
				<button on:click={toggleDropDown} class="p-3 hover:bg-gray-300">Products</button>
				<ul class="absolute z-50 w-44 bg-secondary {showDropDown ? '' : 'hidden'}">
					{#each categories as category}
						<li class="text-gray-900">
							<a href="/shop/category/{category.name?.replace(/\s+/g, '-')}">{category.name}</a>
						</li>
					{/each}
				</ul>
			</li>
			<li class="p-3 hover:bg-gray-300">Brands</li>
			<li class="p-3 hover:bg-gray-300">Deals</li>
		</ul>
=======
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
/>

<nav class="flex items-center justify-between bg-[#a0d8f1] px-6 py-4 dark:bg-gray-900">
	<div class="flex items-center">
		<div class="text-xl font-bold text-gray-900 dark:text-white">
			<ul class="md:flow-row mt-4 flex flex-col font-medium md:mt-0 md:space-x-8">
				<li>
					<button
						type="button"
						class="flex w-full items-center justify-between border-b border-gray-100 py-2 pl-3 pr-4 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						on:click={showProductsMenu}
						>Products<svg
							aria-hidden="true"
							class="ml-1 h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></button
					>
					<div
						class="absolute z-10 {showMenu === false
							? 'hidden'
							: 'grid'} lg:grid-auto-fill lg:grid-cols-min [200px, 1fr] grid-cols-1 rounded-lg bg-white text-sm shadow-sm transition-all duration-200 dark:bg-gray-700 md:grid-cols-2"
					>
						{#each categories as category (category.id)}
							<div class="p-4 pb-0 font-body text-gray-700 dark:text-white md:pb-4">
								<ul class="space-y-6" aria-labelledby="mega-menu-icons-dropdown-button">
									<li>
										<a
											href="/shop/{encodeURIComponent(category.name.replace(/\s+/g, '-'))}/all"
											class="hover:text-#a0d8f1 group flex items-center font-heading text-lg text-gray-700 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-500"
											on:click={showProductsMenu}
										>
											<span class="sr-only">{category.name}</span>
											{category.name}
										</a>
										<ul class="ml-2 mt-2 space-y-3">
											{#each category.subCategories as sub (sub.id)}
												<li>
													<a
														href="/shop/{encodeURIComponent(
															category.name.replace(/\s+/g, '-')
														)}/{encodeURIComponent(sub.name).replace(/\s+/g, '-')}"
														class="hover:text-#a0d8f1 group flex items-center font-sans text-sm text-gray-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-500"
													>
														<span class="sr-only">{sub.name}</span>
														{sub.name}
													</a>
												</li>
											{/each}
										</ul>
									</li>
								</ul>
							</div>
						{/each}
					</div>

					<!-- <div
						class="absolute z-10 {showMenu === false
							? 'hidden'
							: 'grid'}  w-auto grid-cols-2 rounded-lg border border-gray-100 bg-gray-300 text-sm shadow-md dark:border-gray-700 dark:bg-gray-700 md:grid-cols-3"
					>
						<div class="p-4 pb-0 text-gray-900 dark:text-white md:pb-4">
							<ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
								{#each categories as category (category.id)}
									<li>
										<a
											href="/shop/{encodeURIComponent(category.name.replace(/\s+/g, '-'))}/all"
											class="group flex items-center text-base text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
											on:click={showProductsMenu}
										>
											<span class="sr-only">{category.name}</span>

											{category.name}
										</a>
										<ul class="ml-2 mt-2 space-y-2">
											{#each category.subCategories as sub (sub.id)}
												<li>
													<a
														href="/shop/{encodeURIComponent(
															category.name.replace(/\s+/g, '-')
														)}/{encodeURIComponent(sub.name).replace(/\s+/g, '-')}"
														class="group flex items-center text-sm text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
													>
														<span class="sr-only">{sub.name}</span>
														 <i
															class="{sub.icon} mr-2 h-4 w-4 text-gray-700 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-500"
														/> 
														{sub.name}
													</a>
												</li>
											{/each}
										</ul>
									</li>
								{/each}
							</ul>
						</div>
					</div> -->
				</li>
				<!-- <li>
					<h2
						class="flex w-full items-center justify-between border-b border-gray-100 py-2 pl-3 pr-4 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						Custom Builds
					</h2>
				</li> -->
			</ul>
		</div>
	</div>
	<div class="flex items-center space-x-4">
		<div class="relative">
			<span class="absolute inset-y-0 left-0 flex items-center pl-3">
				<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M12.657 14.95l4.95 4.95-1.414 1.414-4.95-4.95A7.5 7.5 0 1112.657 14.95zm-4.157-7.7a5 5 0 110 7.072A5 5 0 018.5 6.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			<input
				type="text"
				placeholder="Search"
				class="rounded-lg border-gray-300 px-4 py-2 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-900 dark:focus:ring-blue-900"
			/>
		</div>
		<div>
			<button
				class="relative flex items-center text-gray-700 transition-colors duration-300 hover:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-300"
				on:click={showCart}
			>
<<<<<<< HEAD
				<path
					d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span class="text-sm text-gray-900 dark:text-white">Cart</span>
			<span class="absolute left-0 top-0 rounded-full bg-blue-500 p-1 text-xs text-white" />
		</button>
>>>>>>> 69b7bddb43910ef7557313261eb37008a694ce8d
=======
				<svg
					class="mr-2 h-5 w-5 text-gray-700 dark:text-gray-200"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="text-sm text-gray-900 dark:text-white">Cart</span>
				<span class="absolute left-0 top-0 rounded-full bg-blue-500 p-1 text-xs text-white" />
			</button>
			<Cart bind:this={cartComponent} />
		</div>
>>>>>>> 2dd1ed5 (Shopping cart now stored on database)
	</div>
</nav>

<slot />
