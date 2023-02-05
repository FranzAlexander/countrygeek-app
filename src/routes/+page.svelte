<script lang="ts">
	import Card from '$lib/nested/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	data.name;

	let repair_points: string[] = ['Computer', 'Laptop', 'Apple', 'Phone'];
</script>

<div class="grid grid-cols-3 gap-16 p-6">
	<Card title={'Repairs'} link_text={'Book'} link={'/booking'} desc_points={repair_points} />
	<Card title={'Email'} link_text={'More'} link={''} desc_points={[]} />
	<Card title={'Internet'} link_text={'More'} link={''} desc_points={[]} />
	<Card title={'Store'} link_text={'Shop'} link={''} desc_points={[]} />
	<Card title={'Business'} link_text={'See more'} link={''} desc_points={[]} />
	<Card title={'Farms & Wineries'} link_text={'Specs'} link={''} desc_points={[]} />
</div>
