<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
	import { invalidate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/nested/Footer.svelte';
	import Nav from '$lib/nested/Nav.svelte';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex flex-col bg-country-geek-test ">
	<!-- <Header session={data.session} /> -->
	<!-- <Nav /> -->
	<nav
		class="z-30 box-border flex w-full justify-between p-2 font-light text-country-geek-test-text"
	>
		<a href="/" class="ml-10 h-32 w-32">
			<img src={logo} alt="Country Geek logo" class="box-border object-fill " /></a
		>
		<ul class="flex items-center justify-center">
			<li class="p-2">
				<a href="/services" class="text-2xl">Services</a>
			</li>
			<li class="p-2"><a href="/" class="text-2xl">Shop</a></li>
			<li class="p-2"><a href="/" class="text-2xl">Business</a></li>
			<li class="p-2"><a href="/" class="text-2xl">Farms & Wineries</a></li>
		</ul>

		{#if !data.session}
			<ul class="mr-10 flex items-center justify-center">
				<li class="rounded-lg border-2 p-2">
					<a href="/account/signin" class="text-2xl">Sign In</a>
				</li>
				<li class="p-2">
					<a href="/account/signup" class="text-2xl">Sign Up</a>
				</li>
			</ul>
		{:else}
			{data.session.user.user_metadata.fullname}
		{/if}
	</nav>

	<slot />
	<Footer />
</div>
