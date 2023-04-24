<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;

	let showMenu = false;

	function toggleMenu() {
		showMenu = showMenu === false ? true : false;
	}
</script>

<nav class="border-gray-200 bg-primary">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center">
			<img src={logo} alt="" class="mr-3 h-14 lg:h-20" />
		</a>
		<button
			type="button"
			class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
			aria-controls="navbar-default"
			aria-expanded="false"
			on:click={toggleMenu}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40"
				viewBox="0 96 960 960"
				width="40"
				class="fill-secondary"
				><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg
			></button
		>
		<div class=" w-full md:block md:w-auto {showMenu ? '' : 'hidden'}">
			<ul
				class="mt-4 flex flex-col gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary md:p-0 md:dark:bg-gray-900"
			>
				<li>
					<a
						href="/services"
						class="block rounded bg-primary py-2 pl-3 pr-4 text-secondary dark:text-secondary md:text-xl"
						aria-current="page"
						on:click={toggleMenu}>Services</a
					>
				</li>
				<li>
					<a
						href="/signin"
						class="block rounded bg-primary py-2 pl-3 pr-4 text-secondary dark:text-secondary md:border md:border-secondary md:text-xl"
						aria-current="page"
						on:click={toggleMenu}>Sign In</a
					>
				</li>
				<li>
					<a
						href="/signup"
						class="block rounded bg-primary py-2 pl-3 pr-4 text-secondary dark:text-secondary md:text-xl"
						aria-current="page"
						on:click={toggleMenu}>Sign up</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<!-- <AppBar background="bg-primary" gridColumns="1">
	<nav class="flex w-full flex-col justify-between lg:flex-row">
		<div class="flex justify-between">
			<a href="/" class="h-auto w-[20%] lg:w-[8%]"
				><img src={logo} alt="Country Geek logo" class="object-fill" /></a
			>
			<button class="lg:hidden" on:click={toggleMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="40"
					viewBox="0 96 960 960"
					width="40"
					class="fill-secondary-500"
					><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg
				>
			</button>
		</div>
		<ul
			class="text-country-geek-white mt-2 w-full flex-col items-start md:w-1/5 lg:flex-row {showMenu
				? 'flex'
				: 'hidden lg:flex'}"
		>
			<li class="w-full bg-gray-900/80 text-center md:my-auto md:bg-transparent">
				<a href="/services" class=" box-border block p-1 md:p-2" on:click={toggleMenu}>Services</a>
			</li>
			{#if !session}
				<li class="w-full text-center md:my-auto md:rounded-lg md:border-2">
					<a href="/signin" class="box-border block p-1">Sign In</a>
				</li>
				<li class="w-full bg-gray-900/80 text-center md:my-auto md:bg-transparent">
					<a href="/signup" class="box-border block p-1 md:p-2">Sign up</a>
				</li>
			{/if}
		</ul>
	</nav>
</AppBar> -->
