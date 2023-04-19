<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import SignInMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';
	import SignUpPersonIcon from '$lib/icons/SignUpPersonIcon.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;

		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};

	const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2, 4}$/g;
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Sign up for an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign up, registration, account" />
	<title>Sign Up - Country Geek</title>
</svelte:head>

<section class="w-full">
	<form
		method="POST"
		use:enhance={handleSubmit}
		class="m-auto mt-6 flex w-1/5 flex-col gap-4 rounded-xl border-2 border-gray-300 bg-country-geek-white p-4 shadow-md"
	>
		<h1 class="mb-4 text-3xl font-bold">Sign Up</h1>

		{#if form?.error}
			<div class="mb-4 font-bold text-red-500">{form.error}</div>
		{/if}

		{#if form?.message}
			<div class="mb-4 font-bold text-red-500">{form.message}</div>
		{/if}

		<div class="flex flex-col">
			<label for="fullname" class="mb-2 block text-2xl text-gray-900">Fullname:</label>
			<input
				type="text"
				name="fullname"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none"
				required
				placeholder="Enter Name"
				pattern=""
			/>
		</div>
		<div class="flex flex-col">
			<label for="email" class="mb-2 block text-2xl text-gray-900">Email:</label>
			<input
				type="email"
				name="email"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none invalid:focus:border-pink-500 invalid:focus:text-pink-500"
				required
				placeholder="Enter Email"
			/>
		</div>

		<div class="mb-4 flex flex-col">
			<label for="password" class="mb-2 block text-2xl text-gray-900">Password:</label>
			<input
				type="password"
				name="password"
				id=""
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none invalid:focus:border-pink-500 invalid:focus:text-pink-500"
				required
				placeholder="Enter Password"
			/>
		</div>

		<p>By clicking sign up you are agreeing to the <a href="/privacy">Privacy Policy</a></p>

		<button
			type="submit"
			disabled={loading}
			class="m-auto w-1/2 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white shadow-md shadow-black transition-all duration-200 ease-linear hover:bg-country-geek-test-accent"
		>
			Sign Up
		</button>
	</form>
	<div class="text-center text-country-geek-test-text">
		<p>
			Already have an account? <a href="/account/signin" class="text-purple-500 underline"
				>Sign In</a
			>
		</p>
	</div>
</section>

<style>
</style>
