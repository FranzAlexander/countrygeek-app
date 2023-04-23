<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import SigninMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;

		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};
</script>

<svelte:head>
	<meta name="description" content="Sign in to an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign in, login, account" />
	<title>Sign In - Country Geek</title>
</svelte:head>

<section class="h-auto w-full py-5">
	<form
		method="POST"
		use:enhance={handleSubmit}
		class="bg-country-geek-white m-auto my-6 flex h-auto w-1/5 flex-col gap-4 rounded-xl border-2 border-gray-300 p-4 shadow-md"
	>
		<h1 class="mb-4 text-3xl font-bold">Sign In</h1>
		<div class="flex flex-col">
			<label for="email" class="mb-2 block text-2xl text-gray-900">Email:</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Enter email here"
				required
				class="focus:border-country-geek-test-accent rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:outline-none"
			/>
		</div>
		<div class="mb-4 flex flex-col">
			<label for="password" class="mb-2 block text-2xl text-gray-900">Password:</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter password here"
				required
				class="focus:border-country-geek-test-accent rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:outline-none"
			/>
		</div>

		<button
			type="submit"
			disabled={loading}
			class="bg-country-geek-test hover:bg-country-geek-test-accent text-country-geek-white m-auto w-1/2 rounded-md p-2 text-2xl shadow-md shadow-black transition-all duration-200 ease-linear"
			>Sign In</button
		>

		<a href="/account/signup" class="text-country-geek-test-accent m-auto text-base underline">
			Don't have an account? Sign Up</a
		>
	</form>
</section>
