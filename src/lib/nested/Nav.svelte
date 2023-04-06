<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
	import type { User } from '$lib/interfaces/user';
	import { getContext } from 'svelte';
	import ExpandMore from './ExpandMore.svelte';
	import type { Session } from '@supabase/supabase-js';

	// export let session: Session | null;
</script>

<nav class="z-30 box-border flex w-full justify-between p-2 text-white">
	<a href="/" class="ml-10 h-32 w-32">
		<img src={logo} alt="Country Geek Logo" class="box-border object-fill" /></a
	>

	<ul class="flex items-center justify-center">
		<li class="p-2">
			<a href="/services" class="text-2xl">Services</a>
		</li>
		<li class="p-2"><a href="/" class="text-2xl">Shop</a></li>
		<li class="p-2"><a href="/" class="text-2xl">Business</a></li>
		<li class="p-2"><a href="/" class="text-2xl">Farms & Wineries</a></li>
	</ul>
	<!-- {#if $user.firstname} -->
	<!-- <div class="relative  mr-10 self-center border-2 border-white rounded-lg">
			<div class="w-full flex justify-center items-center p-2 peer">
				<span class="text-xl">{$user.firstname}</span>
				<ExpandMore />
			</div>
			<ul
				class="invisible z-10  absolute peer-hover:visible hover:visible bg-country-geek-blue w-full"
			>
				<li class="flex bg-cyan-500/20 p-2 hover:bg-cyan-500/10">
					<a href="/account/{$user.firstname}" class="w-full">Profile</a>
				</li>
				<li class="bg-cyan-500/20 p-2">Logout</li>
			</ul>
		</div> -->
	<!-- {:else} -->

	<ul class="mr-10 flex items-center justify-center shadow-lg">
		<li class="rounded-lg border-2 p-2">
			<a href="/account/signin" class="text-2xl">Sign In</a>
		</li>
		<li class="p-2"><a href="/account/signup" class="text-2xl">Sign Up</a></li>
	</ul>
	<!-- {/if} -->
</nav>
