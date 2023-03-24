<script lang="ts">
	import type { User } from '$lib/interfaces/user';
	import Footer from '$lib/nested/Footer.svelte';
	import Nav from '$lib/nested/Nav.svelte';
	import { setUser, user } from '$lib/stores';
	import { setContext } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let newUser: User = { firstname: '', role: 'Customer' };

	if (data.user) {
		newUser = data.user;
	}
	$: user;
	setUser(newUser);

	setContext('user', user);
</script>

<div class="flex flex-col bg-country-geek-blue">
	<Nav />
	<slot />
	<Footer />
</div>
