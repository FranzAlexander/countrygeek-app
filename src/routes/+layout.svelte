<script lang="ts">
	import '../app.css';

	import { invalidate } from '$app/navigation';
	import Header from '$lib/nested/Header.svelte';

	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import Footer from '$lib/nested/Footer.svelte';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Header {session} />

<slot />

<Footer />
