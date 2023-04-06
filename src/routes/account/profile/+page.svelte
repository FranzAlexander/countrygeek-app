<script lang="ts">
	import type { PageData } from '../$types';

	let groupDisabled: boolean[] = [true, true];

	function makeEditable(index: number) {
		groupDisabled[index] = false;
	}

	export let data: PageData;
	$: supabase = data.supabase;

	let user = data.session?.user;
	console.log(user);
</script>

<section class="flex w-full p-2">
	<div class="flex gap-8">
		<div class="rounded-lg bg-country-geek-white p-4">
			<div
				class="mb-4 flex items-center justify-between gap-6 border-b-2 border-country-geek-dark-gray pb-2"
			>
				<h1 class="text-3xl">Personal Detials</h1>
				<button
					class="rounded-lg bg-country-geek-blue p-2 text-base text-country-geek-white hover:bg-country-geek-test-accent"
					on:click={() => {
						makeEditable(0);
					}}>Edit</button
				>
			</div>
			<form action="" class="flex flex-col gap-4">
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Fullname:</label>
					<input
						type="text"
						disabled={groupDisabled[0]}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none disabled:border-transparent"
					/>
				</div>

				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Email:</label>
					<input
						type="email"
						disabled={groupDisabled[0]}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none invalid:focus:border-pink-500 invalid:focus:text-pink-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Phone:</label>
					<input
						type="text"
						disabled={groupDisabled[0]}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none invalid:focus:border-pink-500 invalid:focus:text-pink-500"
					/>
				</div>
			</form>
		</div>

		<div>
			<form action="">
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Street Address:</label>
					<input type="text" />
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">City/Suburb:</label>
					<input type="text" />
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Postcode:</label>
					<input type="text" />
				</div>
			</form>
		</div>
	</div>
</section>
