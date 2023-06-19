<script lang="ts">
	import { features } from '../../data/services';
	import { scale } from 'svelte/transition';
</script>

<section
	id="features"
	class="bg-white dark:bg-gray-800 flex w-full flex-col gap-10 px-8 py-8 lg:px-16"
>
	<h2 class="text-gray-900 dark:text-white mb-8 text-center text-4xl font-bold">Our Services</h2>
	<div class="grid gap-8 md:grid-cols-4">
		{#each features as feature}
			<div
				class="border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 flex transform flex-col items-center justify-center rounded-lg border px-8 py-6 text-center shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
				in:scale={{ duration: 300 }}
			>
				<i class={feature.icon + ' text-blue-500 mb-2 text-5xl'} />
				<h3 class="mb-4 text-2xl font-semibold">{feature.title}</h3>
				<p class="text-gray-700 text-base">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>
