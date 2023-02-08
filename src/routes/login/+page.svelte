<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserLogin } from '$lib/interfaces/user';
	import { redirect } from '@sveltejs/kit';
	let emailError: boolean = false;
	let errorMsg: string = '';
</script>

<form
	use:enhance
	class="relative h-[50vh] w-1/4 p-4 bg-gradient-to-br from-teal-blue to-american-violet m-auto mt-14 rounded-2xl shadow-lg shadow-american-violet/80 "
	method="POST"
>
	<h2 class=" text-white text-5xl text-center p-2 mt-4">Log in</h2>
	<fieldset class="w-2/4 p-2 mt-6 mb-6 m-auto flex flex-col gap-6">
		<!-- Email -->
		<input
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			type="email"
			name="user_email"
			placeholder="Email"
			required
		/>

		<!-- Password -->
		<input
			type="password"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Password"
			required
		/>
	</fieldset>
	<input
		type="button"
		value="Log In"
		class="m-auto block text-white bg-white/10 rounded border-2 border-metallic-yellow p-1 text-xl cursor-pointer "
	/>
	<label class="text-white m-auto block w-2/4 mt-4 p-1 text-center ">
		<input
			type="checkbox"
			name="remember_me"
			class="cursor-pointer bg-white/10 border-2 border-metallic-yellow m-auto p-1 accent-metallic-yellow"
		/> Remember Me?
	</label>
</form>
