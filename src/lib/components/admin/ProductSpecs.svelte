<script lang="ts">
	import type { AddSpec, Spec, SpecValue } from '$lib/interfaces/admin';
	import { onMount } from 'svelte';
	import Dropdown from './Dropdown.svelte';
	import TextInput from './TextInput.svelte';

	export let specs: Spec[];
	export let specValues: SpecValue[];

	let currentSpecs = [{ specId: 0, specValueId: 0, value: '' }];
	function addSpec() {
		currentSpecs = [...currentSpecs, { specId: 0, specValueId: 0, value: '' }];
	}

	export function updateSelectSpecs(newSpecs: [{ specId: 0; specValueId: 0; value: '' }]) {}
</script>

<div
	class="aspect-w-1 aspect-h-1 overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
>
	<div class="p-6 sm:p-8">
		<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
			Product Images
		</h1>
		<div class="mt-6 space-y-6">
			{#each currentSpecs as spec, i (i)}
				<div class="space-y-2">
					<Dropdown name={`spec-id-${i}`} label={'Spec'} values={specs} />
					<TextInput name={`spec-value-${i}`} label={'Spec Value'} placeholder={''} value={''} />
					<Dropdown name={`spec-value-id-${i}`} label={'Spec Label'} values={specValues} />
				</div>
			{/each}
			<button
				type="button"
				class="mt-6 block w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				on:click={addSpec}
			>
				Add +
			</button>
		</div>
	</div>
</div>
