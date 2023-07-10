<script lang="ts">
	import type { ServiceOffered } from '$lib/interfaces/service';
	import iconDictionary from '$lib/util';
	import { scale } from 'svelte/transition';

	export let services: ServiceOffered[];

	let showBenefits: Record<string, boolean> = {};

	let serviceComponents: (typeof iconDictionary.icon1 | null)[] = [];

	services.forEach((service) => {
		showBenefits[service.title] = false;
		serviceComponents.push(iconDictionary[service.icon] || null);
	});

	function toggleBenefits(title: string) {
		showBenefits[title] = !showBenefits[title];
	}
</script>

<section id="services" class="flex w-full flex-col gap-10 px-8 py-8 lg:px-16">
	<h2
		class="mb-8 text-center font-heading text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
	>
		Our Services
	</h2>
	<div class="grid grid-cols-1 justify-items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each services as service, index (service.title)}
			<article
				class="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-6 text-center text-gray-900 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
				in:scale={{ duration: 300 }}
				class:scale-105={showBenefits[service.title]}
			>
				<div class="flex flex-grow flex-col justify-between">
					<div>
						<div class="mb-4 flex w-full items-center justify-center">
							<!-- <img src={service.icon} alt="" class="h-12 w-12 fill-current text-blue-500" /> -->
							{#if serviceComponents[index]}
								<svelte:component this={serviceComponents[index]} />
							{/if}
							<!-- <i class={service.icon + ' h-12 w-12 text-4xl text-blue-500'} /> -->
						</div>

						<h3 class="mb-4 text-center font-heading text-xl font-bold">
							{service.title}
						</h3>

						<p class="font-sans text-base text-gray-700">{service.description}</p>
					</div>
					<div>
						<button
							type="button"
							class="text-xm mb-2 rounded-lg bg-[#008080] px-3 py-1 font-body font-semibold text-white hover:bg-[#009999]"
							on:click={() => toggleBenefits(service.title)}
						>
							{showBenefits[service.title] ? 'Hide Details' : 'Learn More'}
						</button>

						{#if showBenefits[service.title]}
							<div class="mt-4 w-full overflow-auto text-gray-700 dark:text-gray-400">
								<ul>
									{#each service.benefits as benefit}
										<li class="mt-2 flex">
											<span class="fas fa-check mr-2 text-green-500" />
											<span>{benefit}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
