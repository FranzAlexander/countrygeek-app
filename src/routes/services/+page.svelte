<script lang="ts">
	import type { Services } from '$lib/interfaces/service';
	import type { PageData } from './$types';

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
	<meta name="description" content="Sign in to an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign in, login, account" />
	<title>Services - Country Geek</title>
</svelte:head>

<section class="flex w-full flex-col gap-5 overflow-scroll bg-primary p-2 text-gray-900 md:gap-10">
	{#each loadedServices as service}
		<div class="mb-8 flex w-full flex-col md:p-5">
			<div class="rounded-lg border border-gray-300 bg-secondary py-2 md:text-left">
				<h1 class="text-center text-2xl font-bold text-gray-900 md:ml-10 md:text-left md:text-3xl">
					{service?.category_name}
				</h1>
			</div>

			<div class="mt-8 flex flex-col gap-8 md:grid md:grid-cols-3 lg:grid-cols-4">
				{#each service?.sub_service as sub}
					<div
						class="mx-auto flex max-w-sm flex-col rounded-lg border border-gray-200 bg-secondary p-6 shadow md:justify-between"
					>
						<div class="flex flex-col md:justify-between">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
								{sub.sub_service_name}
							</h5>
							<p class="md: mb-3 font-normal text-gray-800">{sub.service_description}</p>
						</div>
						<a
							class="inline-flex w-max items-center rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary"
							href="/services/booking/?c={encodeURIComponent(
								service?.category_name ?? ''
							)}&s={encodeURIComponent(sub?.sub_service_name ?? '')}">Book Now!</a
						>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
