<script lang="ts">
	import type { shopCategories } from '$lib/interfaces/shop';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let categories: shopCategories[];
	if (data?.categories) {
		categories = data.categories;
	}

	let showDropDown = false;

	function toggleDropDown() {
		showDropDown = showDropDown === false ? true : false;
	}
</script>

<nav class="w-full bg-secondary">
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
	</div>
</nav>

<slot />
