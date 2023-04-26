<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
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
</script>

<svelte:head>
	<meta name="description" content="Sign in to an account at Country Geek" />
	<meta name="keywords" content="Country Geek, sign in, login, account" />
	<title>Sign In - Country Geek</title>
</svelte:head>

<section class="h-full w-full bg-primary p-1 pt-10">
	<form
		method="POST"
		action="?/defaultSignIn"
		use:enhance={handleSubmit}
		class="flex w-full max-w-sm flex-col rounded-lg border-2 border-gray-300 bg-secondary p-2 text-gray-900 shadow-black md:mx-auto md:p-4 xl:max-w-xl"
	>
		<h1 class="mb-6 text-3xl font-bold">Sign In</h1>
		<div class="flex w-full flex-col">
			<button
				type="submit"
				formaction="?/facebookSignIn"
				class="dark:focus:ring-[#3b5998]/55 mb-2 mr-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50 md:justify-center"
			>
				<svg
					class="-ml-1 mr-2 h-4 w-4"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="facebook-f"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					><path
						fill="currentColor"
						d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
					/></svg
				>
				Sign in with Facebook</button
			>
			<button
				type="submit"
				formaction="?/googleSignIn"
				class="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 md:justify-center"
			>
				<svg
					class="-ml-1 mr-2 h-4 w-4"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="google"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 488 512"
					><path
						fill="currentColor"
						d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
					/></svg
				>
				Sign in with Google
			</button>
		</div>
		<div
			class="whitesapce-nowrap box-border flex items-center before:relative before:inline-block before:w-1/2 before:border before:border-b before:border-gray-500 before:content-[''] after:relative after:inline-block after:w-1/2 after:border after:border-b after:border-gray-500 after:content-['']"
		>
			<span class="px-1">or</span>
		</div>
		{#if form?.error}
			<div class="mb-4 font-bold text-red-500">{form.error}</div>
		{/if}

		<div class="mb-6">
			<label for="email" class="mb-2 block font-medium text-gray-900">Email</label>
			<input
				type="email"
				name="email"
				class="border-border-gray-300 block w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 shadow-md focus:border-accent focus:ring-primary-20"
				autocomplete="email"
				placeholder="Enter Email"
			/>
		</div>

		<div class="mb-6">
			<label for="password" class="mb-2 block font-medium text-gray-900">Password:</label>
			<input
				type="password"
				name="password"
				id=""
				class="border-border-gray-300 block w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 shadow-md focus:border-accent focus:ring-primary-20"
				autocomplete="current-password"
				placeholder="Enter Password"
			/>
		</div>

		<button
			type="submit"
			disabled={loading}
			class="m-auto mb-4 w-1/2 rounded-md bg-primary p-2 text-xl text-secondary shadow-md shadow-black transition-all duration-200 ease-linear hover:bg-accent"
			>Sign In</button
		>

		<div class="text-center text-gray-900">
			<p>
				Don't have an account?<a href="/signup" class="ml-2 text-primary underline">Sign Up</a>
			</p>
		</div>
	</form>
</section>
