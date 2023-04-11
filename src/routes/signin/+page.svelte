<script lang="ts">
	import { enhance } from '$app/forms';
	import SigninMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Sign in to an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign in, login, account" />
	<title>Sign In - Country Geek</title>
</svelte:head>

<section class="w-full">
	<form
		method="POST"
		class="m-auto mt-6 flex w-1/5 flex-col gap-4 rounded-2xl bg-country-geek-white p-4 shadow-md"
	>
		<h1 class="mb-4 text-3xl font-bold">Sign In</h1>
		<div class="flex flex-col">
			<label for="email" class="mb-2 block text-2xl text-gray-900">Email:</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Enter email here"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
			/>
		</div>
		<div class="mb-4 flex flex-col">
			<label for="password" class="mb-2 block text-2xl text-gray-900">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter password here"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
			/>
		</div>

		<button
			type="submit"
			class="m-auto w-1/2 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear hover:bg-country-geek-test-accent"
			>Sign In</button
		>

		<a href="/account/signup" class="m-auto text-base text-country-geek-test-accent underline">
			Don't have an account? Sign Up</a
		>
	</form>
	<!-- <div
		class="p-1 bg-gradient-to-br from-cyan-500 to-country-geek-light-purple shadow-black shadow-md w-1/4 rounded-xl m-auto"
	>
		<form
			method="POST"
			use:enhance
			class="flex flex-col items-center bg-neutral-800 rounded-xl p-2 gap-2 w-full"
		>
			<h2 class="text-4xl text-center p-5">Sign In</h2>
			<div class="flex flex-col rounded-md p-2 w-4/5">
				<label for="user_email" class="text-2xl">Email:</label>
				<div class="flex bg-neutral-700 rounded-xl border-2 border-cyan-500/80 p-1 gap-4 w-full">
					<SigninMailIcon />
					<input
						type="email"
						name="email"
						id=""
						class="bg-neutral-700  caret-cyan-500  focus:outline-none  outline-cyan-500  rounded-md text-xl w-full"
						placeholder="Enter Email Here!"
					/>
				</div>
			</div>
			<div class="flex flex-col rounded-md p-2">
				<label for="user_password" class="text-2xl">Password:</label>
				<div class="flex bg-neutral-700 rounded-xl border-2 border-cyan-500/80 p-1 gap-4 w-full">
					<SignInPasswordIcon />
					<input
						type="password"
						name="password"
						class="bg-neutral-700  caret-cyan-500  focus:outline-none  outline-cyan-500  rounded-md text-xl w-full"
						placeholder="Enter Password Here!"
					/>
				</div>
			</div>
			<div>
				<input type="checkbox" name="" id="remember_me_checkbox" />
				<label for="remember_me_checkbox">Remember Me?</label>
			</div>
			<button type="submit" class="text-2xl bg-country-geek-light-purple p-2 rounded-md"
				>Continue</button
			>
		</form>
	</div> -->
</section>
