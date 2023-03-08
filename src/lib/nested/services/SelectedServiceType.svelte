<script lang="ts">
	export let type_name: string = '';
	export let type_description: string = '';
</script>

<div
	class="p-1 rounded-lg shadow-md shadow-black bg-gradient-to-l from-country-geek-light-purple to-cyan-500"
>
	<div class="flex text-white rounded p-2 bg-neutral-900 justify-evenly gap-5">
		<h2 class="text-2xl">{type_name}</h2>
		<p class="self-center">{type_description}</p>
	</div>
</div>
