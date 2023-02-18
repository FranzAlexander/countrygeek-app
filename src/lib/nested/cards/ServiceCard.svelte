<script lang="ts">
	export let icon: string;
	export let icon_alt: string;
	export let title: string;
</script>

<div class="flex flex-col items-center border-2 text-black shadow shadow-black/80 rounded p-2">
	<h2 class="text-4xl">{title}</h2>
	<img src={icon} alt={icon_alt} class="h-3/4 object-cover" />
</div>
