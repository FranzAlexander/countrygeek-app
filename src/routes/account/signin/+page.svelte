<script lang="ts">
	import mail_icon from '$lib/icons/signin_mail.svg';
	import SigninMailIcon from '$lib/icons/SignInMailIcon.svelte';
	import SignInPasswordIcon from '$lib/icons/SignInPasswordIcon.svelte';
</script>

<section class="text-white w-full bg-country-geek-blue p-10 ">
	<form
		action=""
		class="flex flex-col items-center bg-white/5 w-1/4 m-auto mt-[10%] rounded-xl  border-2 border-country-geek-light-purple shadow-black shadow-md p-2 gap-2"
	>
		<h2 class="text-4xl text-center p-5">Sign In</h2>
		<div class="flex flex-col rounded-md p-2">
			<label for="user_email" class="text-2xl">Email</label>
			<div class="flex bg-white/10 rounded border-2 border-cyan-500 p-2 gap-4">
				<SigninMailIcon />
				<input
					type="email"
					name="user_email"
					id=""
					class="bg-neutral-800  caret-cyan-500  focus:outline-none  outline-cyan-500  rounded-md  p-2 text-2xl"
					placeholder="Enter Email Here!"
				/>
			</div>
		</div>
		<div class="flex flex-col rounded-md p-2">
			<label for="user_password" class="text-2xl">Password</label>
			<div class="flex bg-white/10 rounded border-2 border-cyan-500 p-2 gap-4">
				<SignInPasswordIcon />
				<input
					type="password"
					name="user_password"
					class="bg-transparent  caret-cyan-500  focus:outline-none  outline-cyan-500  text-2xl"
					placeholder="Enter Password Here!"
				/>
			</div>
		</div>
		<button class="text-2xl bg-country-geek-light-purple p-2 rounded-md">Continue</button>
		<div>
			<input type="checkbox" name="" id="remember_me_checkbox" />
			<label for="remember_me_checkbox">Remember Me?</label>
		</div>
	</form>
</section>
