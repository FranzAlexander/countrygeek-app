<script lang="ts">
	import type { ProductDisplay } from '$lib/interfaces/shop';

	export let productDisplay: ProductDisplay;
	export let categoryName: string;
</script>

<div
	class="relative max-w-sm overflow-hidden rounded-lg bg-gray-50 shadow-md shadow-gray-300 hover:shadow-blue-400"
>
	<a
		href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
			productDisplay.name.replace(/\s+/g, '-').concat('-').concat(productDisplay.sku)
		)}"
		class="overflow-hidden"
	>
		<img
			src={productDisplay.thumbnail}
			alt={productDisplay.name}
			class="relative h-64 w-full object-contain"
		/>
	</a>
	<div class="px-6 py-4">
		<h2 class="mb-4 text-lg font-bold text-gray-900">{productDisplay.name}</h2>
		<p class="mb-2 w-min rounded-full bg-gray-400 p-1 text-xs text-gray-900">
			{productDisplay.model}
		</p>
		<div class="flex justify-between">
			<span
				class="mb-2 mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-gray-700"
				>${productDisplay.price}</span
			>
			<button
				type="button"
				class="text-xm mb-2 rounded-lg bg-blue-700 px-3 py-1 font-semibold text-white"
				>Add to cart</button
			>
		</div>
	</div>
</div>
<!-- 
<script lang="ts">
    import type { ProductDisplay } from '$lib/interfaces/shop';

    export let productDisplay: ProductDisplay;
    export let categoryName: string;
</script>

<div class="relative max-w-sm overflow-hidden rounded-lg shadow-lg">
    <a href="/shop/{encodeURIComponent(categoryName.replace(/\s+/g, '-'))}/{encodeURIComponent(
        productDisplay.name.replace(/\s+/g, '-').concat('-').concat(productDisplay.sku)
    )}" class="overflow-hidden">
        <img src={productDisplay.thumbnail} alt={productDisplay.name} class="h-64 w-full object-cover rounded-t-lg" />
    </a>
    <div class="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-b-lg mt-2">
        <h2 class="text-xl font-semibold text-gray-900">{productDisplay.name}</h2>
        <p class="text-sm text-gray-700">{productDisplay.model}</p>
        <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-medium text-green-600">${productDisplay.price}</span>
            <button type="button" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Add to Cart</button>
        </div>
    </div>
</div> -->
