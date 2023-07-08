<script lang="ts">
	import Contact from '$lib/components/services/Contact.svelte';
	import Feature from '../lib/components/services/Feature.svelte';
	import Hero from '../lib/components/services/Hero.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Country Geek: Custom Software, Web Development, Data Analytics for Agriculture</title>
	<meta
		name="description"
		content="Specializing in custom software solutions, web development, and data analysis for agriculture. At Country Geek, we help businesses, farms, wineries, and researchers in the South West streamline operations and optimize yields for increased productivity."
	/>
</svelte:head>

<main
	class=" flex h-full w-full flex-col gap-20 bg-fixed pb-10"
	style="background-image: url('https://imagedelivery.net/cXH-XdNE8neFJ-7qoa3CXA/108164fc-2bf7-4fef-72e3-4d8832e6bc00/public'); background-repeat:no-repeat; "
>
<<<<<<< HEAD
	<div class="w-full lg:pl-10 lg:pt-10 min-h-screen">
		<div class="p-2 lg:w-2/3">
			<h1 class="lg:text-3xl">
				Providing Tech services to the <span class="text-country-geek-gold">SOUTH WEST!</span>
			</h1>
			<p class="text-sm lg:text-2xl">
				Have any technology problems at home, need something new, own a businesses and need some
				technology or even if you own a farm or winery. We have you covered, best part of it all, we
				come to you!
			</p>
		</div>
	</div>
</section>
=======
	<Hero />
	<Feature />
	<Contact {form} />
</main>
>>>>>>> 69b7bddb43910ef7557313261eb37008a694ce8d
