<script lang="ts">
	export let name: string;
	export let image: string;
	export let price: number;
</script>

<a href="#" class="max-w-sm border border-gray-200 shadow">
	<img src={image} alt={name} />
	<h3>{name}</h3>
	<p>${price}</p>
</a>
