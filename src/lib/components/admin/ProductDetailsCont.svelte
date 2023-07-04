<script lang="ts">
	import type { ShopCategoryWithSub, SubCategory } from '$lib/interfaces/category';
	import Dropdown from './Dropdown.svelte';
	import TextInput from './TextInput.svelte';

	export let brands: Array<{ id: number; name: string }>;
	export let categories: ShopCategoryWithSub[];

	let subCategories: SubCategory[] = categories[0].subCategories;

	function selectSubCategory(event: CustomEvent) {
		const { dropValue } = event.detail;
		subCategories = categories[dropValue - 1].subCategories;
	}

	export let model: string;
	export let pubDate: string;
</script>

<div
	class="aspect-w-1 aspect-h-1 overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
>
	<div class="p-6 sm:p-8">
		<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
			Product Details Cont
		</h1>
		<div class="mt-6 space-y-6">
			<TextInput name="model" label="Model" placeholder="" value={model} />
			<Dropdown name="brand" label="Brand" values={brands} />
			<Dropdown
				name="category"
				label="Category"
				values={categories}
				on:selectDrop={selectSubCategory}
			/>
			<Dropdown name="subCategory" label="Sub Category" values={subCategories} />
			<TextInput name="status" label="Status" placeholder="In Stock" value={''} />
			<TextInput name="release" label="Release" placeholder={''} value={pubDate} />
		</div>
	</div>
</div>
