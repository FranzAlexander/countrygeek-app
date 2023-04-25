<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import logo from '$lib/images/countrygeeklogo.png';
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;

	let fullname = session?.user?.user_metadata.fullname ?? '';
	let email = session?.user?.email;

	let showMenu = false;
	let showDropDown = false;
	function toggleMenu() {
		showMenu = showMenu === false ? true : false;
	}

	function toggleDropDown() {
		showDropDown = showDropDown === false ? true : false;
	}

	async function signout() {
		await fetch('/api/', {
			method: 'POST',
			body: JSON.stringify(''),
			headers: { 'content-type': 'application/json' }
		});

		invalidateAll();
	}
</script>

<nav class="border-gray-200 bg-primary">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center">
			<img src={logo} alt="" class="mr-3 h-14 lg:h-20" />
		</a>
		<div class="flex items-center md:order-2">
			{#if session}
			<button
				type="button"
				class="mr-3 flex rounded-full bg-primary-20 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="user-dropdown"
				data-dropdown-placement="bottom"
				on:click={toggleDropDown}
			>
				<span class="sr-only">Open user menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					viewBox="0 96 960 960"
					width="48"
					class="h-8 w-8 rounded-full fill-secondary"
					><path
						d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z"
					/></svg
				></button
			>
			<!-- Dropdown Menu-->
			<div
				class="z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow {showDropDown
					? ''
					: 'hidden'}"
				id="user-dropdown"
			>
				<div class="px-4 py-3">
					<span class="block text-sm text-gray-900 dark:text-white">{fullname}</span>
					<span class="block truncate text-sm text-gray-900">{email}</span>
				</div>
				<ul class="py-2" aria-labelledby="user-menu-button">
					<li>
						<a
							href="/account/profile"
							class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-500">Profile</a
						>
					</li>
					<li>
						<button
							on:click={signout}
							class="block w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-gray-500"
							>Sign Out</button
						>
					</li>
				</ul>
			</div>
			{/if}
			<button
				type="button"
				class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
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
					aria-hidden="true"
					><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg
				></button
			>
		</div>
		<div
			class="w-full items-center justify-between md:order-1 md:flex md:w-auto {showMenu
				? ''
				: 'hidden'}"
		>
			<ul
				class="mt-4 flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary md:p-0 md:dark:bg-gray-900"
			>
				<li>
					<a
						href="/services"
						class="block rounded bg-primary py-2 pl-3 pr-4 text-secondary dark:text-secondary md:text-xl"
						aria-current="page"
						on:click={toggleMenu}>Services</a
					>
				</li>
				{#if !session}
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
				{/if}
			</ul>
		</div>
	</div>
</nav>
