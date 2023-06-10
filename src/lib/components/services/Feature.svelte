<script lang="ts">
	import { features } from '../../data/services';
	import { scale } from 'svelte/transition';
</script>

<section
	id="features"
	class="flex w-full flex-col gap-10 bg-white px-8 py-8 dark:bg-gray-800 lg:px-16"
>
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">Our Services</h2>
	<div class="grid gap-8 md:grid-cols-4">
		{#each features as feature}
			<div
				class="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-8 py-6 text-center text-gray-900 shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
				in:scale={{ duration: 300 }}
			>
				<i class={feature.icon + ' mb-2 text-5xl text-blue-500'} />
				<h3 class="mb-4 text-2xl font-semibold">{feature.title}</h3>
				<p class="text-base text-gray-700">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>
