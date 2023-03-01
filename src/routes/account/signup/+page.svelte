<script>
	import { enhance } from '$app/forms';
	import SignInMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';
	import SignUpPersonIcon from '$lib/icons/SignUpPersonIcon.svelte';
</script>

<section class="bg-country-geek-blue">
	<form
		method="POST"
		use:enhance
		class="text-white m-auto w-2/4 flex flex-col border-2 border-country-geek-light-purple rounded-xl p-2 bg-white/5 gap-6"
	>
		<h2 class="m-auto text-4xl">Sign Up</h2>
		<div class="grid grid-cols-2 gap-6 p-2">
			<div class="flex flex-col  rounded p-2 ">
				<label for="" class="text-2xl">Firstname</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 p-2 gap-4">
					<SignUpPersonIcon />
					<input
						type="text"
						name="first_name"
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl "
						placeholder="Type Firstname Here"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col rounded p-2">
				<label for="" class="text-2xl">Lastname</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 p-2 gap-4">
					<SignUpPersonIcon />
					<input
						type="text"
						name="last_name"
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl p-2"
						placeholder="Type Lastname Here"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col rounded p-2">
				<label for="" class="text-2xl">Email</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 p-2 gap-4">
					<SignInMailIcon />
					<input
						type="email"
						name="email"
						id=""
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl p-2"
						placeholder="Type Email Here"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col rounded p-2">
				<label for="" class="text-2xl">Email Confirmation</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 p-2 gap-4">
					<SignInMailIcon />
					<input
						type="email"
						name="email_confirm"
						id=""
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl p-2"
						placeholder="Confirm Email Here"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col rounded p-2">
				<label for="" class="text-2xl">Password</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 p-2 gap-4">
					<SignInPasswordIcon />
					<input
						type="password"
						name="password"
						id=""
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl p-2"
						placeholder="Type Password Here"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col rounded p-2">
				<label for="" class="text-2xl">Password Confirmation</label>
				<div class="flex bg-white/10 rounded-md border-2 border-cyan-500 text-2xl p-2">
					<SignInPasswordIcon />
					<input
						type="password"
						name="password_confirm"
						id=""
						class="bg-transparent caret-cyan-500 focus:outline-none text-2xl p-2"
						placeholder="Confirm Password Here"
						required
					/>
				</div>
			</div>
		</div>
		<div class="flex m-auto gap-4 p-2">
			<input
				type="checkbox"
				name="tnc-checked"
				id="terms-and-conditions-checkbox "
				class="accent-cyan-500"
				required
			/>
			<label for="terms-and-conditions-checkbox">I agree to the Terms & Conditions</label>
		</div>
		<button
			type="submit"
			class="p-2 bg-country-geek-light-purple rounded-md w-1/2 m-auto text-2xl hover:bg-gradient-to-r hover:from-country-geek-gold hover:to-country-geek-light-purple"
			>Sign Up</button
		>
	</form>
</section>
