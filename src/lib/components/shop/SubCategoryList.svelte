<script lang="ts">
	import type { SubCategory } from '$lib/interfaces/category';

	export let categoryName: string;
	export let subCategories: SubCategory[];
	export let currentSubCategory: string;
</script>

<div class="flex flex-wrap text-sm">
	<a
		href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/all"
		class="ml-4 px-4 py-2 font-body transition duration-200 ease-in-out {currentSubCategory ===
		'all'
			? 'border-b border-blue-600'
			: 'hover:rounded-lg hover:bg-gray-100 hover:shadow-md'}">All</a
	>
	{#each subCategories as subCategory (subCategory.id)}
		<a
			href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
				subCategory.name.replace(/\s+/g, '-')
			)}"
			class="ml-4 px-4 py-2 font-body transition duration-200 ease-in-out {currentSubCategory ===
			subCategory.name
				? 'border-b border-blue-600'
				: 'hover:rounded-lg hover:bg-gray-100 hover:shadow-md'}">{subCategory.name}</a
		>
	{/each}
</div>
