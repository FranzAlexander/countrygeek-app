<script lang="ts">
	export let name: string;
	export let image: string;
	export let price: number;
</script>

<a
	href="#"
	class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
>
	<img src={image} alt={name} />
	<h2 class="mb-2 text-lg font-semibold">{name}</h2>
	<p>${price}</p>
</a>
