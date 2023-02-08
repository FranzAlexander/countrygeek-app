<script lang="ts">
	import Card from '$lib/nested/Card.svelte';
	import type { PageData } from './$types';
	import computer_icon from '$lib/icons/computer.png';

	export let data: PageData;
	data.name;

	let repair_points: string[] = ['Computer', 'Laptop', 'Apple', 'Phone'];
</script>

<div class="flex flex-col justify-center items-center p-2 gap-5">
	<div
		class="flex flex-col items-center w-3/4 text-white  border-2 rounded-xl border-country-geek-light-blue p-2"
	>
		<h2 class="text-6xl p-2">Services</h2>

		<div class="grid grid-cols-2 gap-2 w-full">
			<!--Computer Service-->
			<div
				class="flex flex-col items-center border-2 bg-white/10 border-white/5 shadow shadow-black/80 rounded"
			>
				<div class="flex p-2 pb-6 justify-between mt-3">
					<img src={computer_icon} alt="Computer repair service icon" class="w-1/4 " />
					<h2 class="text-4xl">Computers</h2>
				</div>
			</div>
			<!--Internet Service-->
			<div
				class="flex flex-col items-center border-2 bg-white/10 border-white/5 shadow shadow-black/80 rounded"
			>
				<h2 class="text-4xl">Internet</h2>
				<div class="flex p-2 pb-6 justify-between mt-3">
					<img src={computer_icon} alt="Computer repair service icon" class="w-1/4 " />
					<ul class="list-disc w-2/4 text-xl">
						<li>Setup</li>
						<li>Device Connection</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="w-3/4 md:h-96 border-2 border-pink-500 rounded-xl">
		<h2 class="text-6xl text-white">Store</h2>
	</div>
</div>
