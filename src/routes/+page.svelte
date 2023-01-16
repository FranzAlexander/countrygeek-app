<script lang="ts">
	import Card from '$lib/nested/Card.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/booking">booking</a>

<div class="services-container">
	<Card title={'Services'} />
	<Card title={'Repair'} />
	<Card title={'Store'} />
</div>

<style>
	.services-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>
