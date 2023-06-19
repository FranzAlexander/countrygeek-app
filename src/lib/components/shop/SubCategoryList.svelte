<script lang="ts">
	import type { SubCategory } from '$lib/interfaces/shop';

	export let categoryName: string;
	export let subCategories: SubCategory[];
</script>

<div class="flex flex-wrap text-sm">
	<a
		href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/all"
		class="border-blue-600 ml-4 border-b px-4 py-2">All</a
	>
	{#each subCategories as subCategory (subCategory.id)}
		<a
			href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
				subCategory.name.replace(/\s+/g, '-')
			)}"
			class="hover:bg-gray-100 ml-4 px-4 py-2 transition duration-200 ease-in-out hover:rounded-lg hover:shadow-md"
			>{subCategory.name}</a
		>
	{/each}
</div>
