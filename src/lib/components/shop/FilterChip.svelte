<script lang="ts">
	export let chipName: string;
</script>

<span
	class="dark:bg-pruple-900 mr-2 inline-flex items-center rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-800 dark:text-purple-300"
>
	{chipName}
	<button
		aria-hidden="true"
		class="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
	>
		<svg
			aria-hidden="true"
			class="h-3.5 w-3.5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
		<span class="sr-only">Remove Filter Chip</span>
	</button>
</span>
