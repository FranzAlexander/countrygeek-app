<script lang="ts">
	export let name: string;
	export let image: string;
	export let price: string;
	export let categoryName: string;
</script>

<div
	class="relative max-w-sm overflow-hidden rounded-lg border border-gray-300 bg-gray-200 shadow-lg hover:shadow-blue-400"
>
	<a
		href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
			name.replace(/\s+/g, '-')
		)}"
		class="overflow-hidden"
	>
		<img src={image} alt={name} class="relative h-64 w-full object-contain" />
	</a>
	<div class="rounded-lg bg-gray-400 px-6 py-4">
		<h2 class="mb-4 text-lg font-bold text-gray-900">{name}</h2>
		<div class="flex justify-between">
			<span
				class="mb-2 mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-gray-700"
				>${price}</span
			>
			<button
				type="button"
				class="text-xm mb-2 rounded-lg bg-blue-700 px-3 py-1 font-semibold text-white"
				>Add to cart</button
			>
		</div>
	</div>
</div>
