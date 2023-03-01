<script lang="ts">
	import ComputerServices from '$lib/nested/services/ComputerServices.svelte';
	import MobileServices from '$lib/nested/services/MobileServices.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="bg-country-geek-blue">
	<ComputerServices computer_services={data.all_services[0]} />
	<div
		class="min-h-[150px] bg-gradient-to-b from-country-geek-blue via-country-geek-light-purple to-country-geek-blue"
	/>
	<MobileServices mobile_services={data.all_services[1]} />
</section>
