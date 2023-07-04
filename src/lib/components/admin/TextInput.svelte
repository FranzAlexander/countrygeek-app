<script lang="ts">
	export let name: string;
	export let label: string;
	export let placeholder: string;
	export let value: string;
</script>

<div>
	<label for={name} class="mb-2 block font-sans text-sm font-medium text-gray-900 dark:text-white"
		>{label}</label
	>
	<input
		type="text"
		{name}
		id={name}
		class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-sans text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
		{placeholder}
		{value}
		step=".01"
		required
	/>
</div>
