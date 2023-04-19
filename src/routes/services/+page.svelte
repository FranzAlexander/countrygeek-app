<script lang="ts">
	import type { Services } from '$lib/interfaces/service';
	import type { PageData } from './$types';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let data: PageData;
	let { session, response } = data;

	let loadedServices: Services[];

	$: {
		if (response) {
			loadedServices = response;
		}
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Sign in to an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign in, login, account" />
	<title>Services - Country Geek</title>
</svelte:head>

<section class="mt-12 flex flex-col gap-10 bg-country-geek-test">
	{#each loadedServices as service}
		<div class="mb-8 flex flex-col gap-8 p-5">
			<div class="flex rounded-xl bg-country-geek-white p-4">
				<!-- <img src={service?.category_image_url} alt="" class="h-16 w-20" /> -->
				<h1 class="text-3xl">{service?.category_name}</h1>
			</div>
			<div class="grid grid-cols-4 gap-8">
				{#each service?.sub_service as sub}
					<div
						class="flex flex-col justify-between gap-4 rounded-xl bg-country-geek-white p-4 shadow-md shadow-black transition-all duration-200 ease-in-out hover:shadow-xl hover:shadow-black"
					>
						<div class="flex flex-col gap-4">
							<h2 class="text-2xl text-country-geek-test">{sub?.sub_service_name}</h2>
							<p class="text-gray-900">
								{sub?.service_description}
							</p>
						</div>
						<a
							class="rounded-xl bg-country-geek-test p-4 text-center font-bold text-country-geek-white transition-all duration-200 ease-linear hover:bg-country-geek-test-accent"
							href="/services/booking/?c={encodeURIComponent(
								service?.category_name ?? ''
							)}&s={encodeURIComponent(sub?.sub_service_name ?? '')}">Book!</a
						>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
