<script lang="ts">
	import type { SpecFilter } from '$lib/interfaces/shop';
	import { createEventDispatcher } from 'svelte';

	export let filters: SpecFilter[];

	const dispatch = createEventDispatcher();

	let showFilters = false;

	function toggleFilters() {
		showFilters = !showFilters;
	}

	async function addFilter(specName: string) {
		dispatch('newFilter', specName);
	}
</script>

<button
	class="inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-center text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
	on:click={toggleFilters}
>
	Filter
	<svg
		class="ml-2 h-4 w-4 stroke-gray-500"
		aria-hidden="true"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 9l-7 7-7-7"
		/></svg
	>
</button>

<div
	class="fixed z-10 w-32 max-w-sm rounded-lg border border-gray-400 bg-gray-300 py-1 {showFilters ===
	false
		? 'hidden'
		: ''}"
>
	{#each filters as specFilter}
		<ul class="text-sm text-gray-700 dark:text-gray-200">
			<li class="flex flex-col first:rounded-t-lg last:rounded-none">
				<span class="bg-gray-300 px-4 py-1 text-gray-900">{specFilter.specName}</span>
				<ul class="">
					{#each specFilter.specOption as specOption}
						<li>
							<button
								class="flex w-full justify-between bg-white px-4 py-1 text-left text-sm hover:bg-gray-200"
								on:click={() => addFilter(specOption.specValue)}
							>
								<span>{specOption.specValue}</span>({specOption.specCount})</button
							>
						</li>
					{/each}
				</ul>
			</li>
		</ul>
	{/each}
</div>
