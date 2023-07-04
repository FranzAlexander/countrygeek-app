<script lang="ts">
	import type { Product } from '$lib/interfaces/product.js';

	export let data;
	let product: Product = {
		sku: '',
		name: '',
		description: '',
		price: '',
		stripeProductId: '',
		brandName: '',
		model: '',
		status: '',
		images: [],
		thumbnail: '',
		warranty: '',
		specs: [],
		suppliers: []
	};
	if (data.product) {
		product = data.product;
	}

	const stockAmount = product.suppliers.reduce((sum, object) => sum + object.amount, 0);
	const allImages = [product.thumbnail].concat(product.images);
	$: selectedImage = allImages[0];
	const selectImage = (image: string) => {
		selectedImage = image;
	};
	const keydownHandler = (image: string, event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			selectImage(image);
		}
	};
</script>

<section class="container flex flex-col gap-4 px-4 py-4">
	<div class="flex flex-col justify-between gap-4 md:flex-row md:gap-4">
		<div class="md:1/2 flex w-full flex-col items-center">
			<img class="h-auto max-w-full rounded-lg" src={selectedImage} alt="Selected product" />
			<div class="scrolling-touch -mx-1 mt-2 flex overflow-x-auto">
				{#each allImages as image (image)}
					<button
						class="mx-1 h-20 w-20 transform transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
						on:click={() => selectImage(image)}
						on:keydown={(event) => keydownHandler(image, event)}
					>
						<img src={image} alt="Product thumbnail" class="h-full w-full object-cover" />
					</button>
				{/each}
			</div>
		</div>
		<div class="flex w-full flex-col gap-4 rounded-lg p-1.5 shadow shadow-gray-500 md:w-1/2">
			<h1 class="mb-2 font-heading text-4xl">{product.name}</h1>
			<span class="mb-1 w-fit rounded-full bg-teal-100 px-2 font-sans text-xl"
				>Sku: {product.sku}</span
			>
			<span class="mb-1 w-fit rounded-full bg-teal-100 px-2 font-sans text-xl"
				>Model: {product.model}</span
			>
			<span>Please allow for 1-2 days for product to be shipped.</span>
			<div class="flex flex-col rounded-lg px-4 py-2">
				<span class="mb-2 font-sans text-2xl">${(Number(product.price) / 100).toFixed(2)}</span>
				<span class="mb-2 font-sans text-lg">In Stock: {stockAmount}</span>
				<div class="w-fit">
					<label for="quantity" class="sr-only">Quantity</label>
					<div class="mb-2 flex items-center rounded border border-gray-200 bg-gray-200">
						<button
							type="button"
							class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
							aria-label="Decrease quantity"
						>
							&minus;
						</button>
						<input
							type="number"
							id="quantity"
							name="quantity"
							value="1"
							class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
						/>
						<button
							type="button"
							class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
							aria-label="Increase quantity"
						>
							&plus;
						</button>
					</div>
				</div>
				<button
					type="button"
					class="mb-2 rounded-lg bg-[#008080] px-3 py-2 font-body text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#009999]"
					aria-label="Add to cart"
				>
					Add to cart
				</button>
			</div>
		</div>
	</div>
	<p class="font-sans">{product.description}</p>
	<div>
		<h2 class="text-xl">Specifications</h2>
		<div class="m-4 mx-auto grid grid-cols-1 gap-6 md:m-0 md:grid-cols-2">
			{#each product?.specs as spec}
				<div class="flex overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
					<div class="flex items-center justify-center bg-teal-600 px-4">
						<i class="{spec.spec_icon} text-white" />
					</div>
					<div class="flex flex-1 items-center justify-between p-3">
						<p class="text-lg font-semibold">{spec.spec_name}</p>
						<p>{spec.spec_value}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
