<script lang="ts">
	import Contact from '$lib/components/services/Contact.svelte';
	import Feature from '../lib/components/services/Feature.svelte';
	import Hero from '../lib/components/services/Hero.svelte';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>

<main
	class=" flex h-full w-full flex-col gap-20 bg-fixed pb-10"
	style="background-image: url('https://imagedelivery.net/cXH-XdNE8neFJ-7qoa3CXA/108164fc-2bf7-4fef-72e3-4d8832e6bc00/public'); background-repeat:no-repeat;"
>
	<Hero />
	<Feature services={data?.services ?? []} />
	<Contact {form} />
</main>
