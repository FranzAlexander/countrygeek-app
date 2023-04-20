<script lang="ts">
	export let type_name: string = '';
	export let type_description: string = '';
</script>

<div
	class="rounded-lg bg-gradient-to-l from-country-geek-light-purple to-cyan-500 p-1 shadow-md shadow-black"
>
	<div class="flex justify-evenly gap-5 rounded bg-neutral-900 p-2 text-white">
		<h2 class="text-2xl">{type_name}</h2>
		<p class="self-center">{type_description}</p>
	</div>
</div>
