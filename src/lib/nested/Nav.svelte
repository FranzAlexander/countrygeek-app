<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
	import type { User } from '$lib/interfaces/user';
	import { getContext } from 'svelte';
	import ExpandMore from './ExpandMore.svelte';
	import type { Session } from '@supabase/supabase-js';

	// export let session: Session | null;
</script>

<nav class="flex text-white w-full justify-between box-border p-2 z-30">
	<a href="/" class="w-32 h-32 ml-10 ">
		<img src={logo} alt="Country Geek Logo" class="object-fill   box-border" /></a
	>

	<ul class="flex justify-center items-center">
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

	<ul class="flex justify-center items-center mr-10">
		<li class="p-2 border-2 rounded-lg">
			<a href="/account/signin" class="text-2xl">Sign In</a>
		</li>
		<li class="p-2"><a href="/account/signup" class="text-2xl">Sign Up</a></li>
	</ul>
	<!-- {/if} -->
</nav>
