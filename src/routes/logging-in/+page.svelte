<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from '../logging-in/$types';

	export let data: PageData;
	$: {
		const redirectTo = $page.url.searchParams.get('redirect');

		if (browser && data.session) {
			goto(redirectTo ?? '/');
		}
	}
</script>

<section>
	<h1>HI</h1>
</section>
