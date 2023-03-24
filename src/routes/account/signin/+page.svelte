<script lang="ts">
	import { enhance } from '$app/forms';
	import SigninMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';
</script>

<section class="text-white w-full bg-country-geek-blue p-10 ">
	<div
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
				<div class="flex bg-neutral-700 rounded-xl border-2 border-cyan-500 p-1 gap-4">
					<SignInPasswordIcon />
					<input
						type="password"
						name="password"
						class="bg-transparent  caret-cyan-500  focus:outline-none  outline-cyan-500  text-xl"
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
	</div>
</section>
