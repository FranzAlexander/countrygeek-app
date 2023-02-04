<script lang="ts">
	import Card from '$lib/nested/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	data.name;
</script>

<div class="grid grid-cols-3 gap-16 p-6">
	<Card title={'Repair'} link_text={'Book'} link={'/booking'} />
	<Card title={'Email'} link_text={'More'} link={''} />
	<Card title={'Internet'} link_text={'More'} link={''} />
	<Card title={'Store'} link_text={'Shop'} link={''} />
	<Card title={'Business'} link_text={'See more'} link={''} />
	<Card title={'Farms & Wineries'} link_text={'Specs'} link={''} />
</div>

<!-- <style>
	.services-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 10vh;
		margin-top: 10vh;
		margin-bottom: 10vh;
	}
</style> -->
