<script lang="ts">
	import type { Category } from '$lib/interfaces/service';

	export let categories: Category[];
	export let selected_category: string;
</script>

<div class="flex flex-col gap-5 text-white">
	<h2 class="text-3xl border-b-2 border-country-geek-gold">Service Details</h2>
	<div class="flex flex-col gap-5">
		<label for="service_category" class="text-xl">Category</label>
		<select name="" id="" class="bg-white/10">
			{#each categories as cat}
				{#if cat.category === selected_category}
					<option value={cat.category} class="bg-country-geek-blue" selected>{cat.category}</option>
				{:else}
					<option value={cat.category} class="bg-country-geek-blue">{cat.category}</option>
				{/if}
			{/each}
		</select>
	</div>
</div>
