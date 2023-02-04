<script lang="ts">
	import type { User } from '$lib/interfaces/user';
	import UserPersonalDetails from '$lib/nested/UserPersonalDetails.svelte';
	let user: User = {
		first_name: '',
		last_name: '',
		email: '',
		phone_number: 0,
		address: { street_number: 0, street_name: '', suburb: '', postcode: 0, state: '' }
	};
</script>

<!-- <section id="default-carousel" class="relative" data-carousel="slide" >
	
</section> -->

<form
	class=" relative h-[50vh] w-1/4 p-4 bg-gradient-to-br from-teal-blue to-american-violet m-auto mt-40 rounded-2xl shadow-lg shadow-american-violet/80 "
	action=""
>
	<h2 class=" text-white text-5xl text-center p-2 mt-4">Sign Up</h2>
	<fieldset class="w-2/4 p-2 mt-6 mb-6 m-auto flex flex-col gap-6">
		<!-- Email -->
		<input
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			type="email"
			name="user_email"
			placeholder="Email"
			required
		/>

		<!-- Confirm Email -->
		<input
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			type="email"
			name="user_email_confirmation"
			placeholder="Confirm Email"
			required
		/>

		<!-- Password -->
		<input
			type="password"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Password"
			required
		/>

		<!-- Confirm Password -->
		<input
			type="password"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Confirm Password"
			required
		/>
	</fieldset>
	<input
		type="button"
		value="Sign Up"
		class="m-auto block text-white bg-white/10 rounded border-2 border-metallic-yellow p-1 text-xl cursor-pointer "
	/>
	<label class="text-white m-auto block w-2/4 mt-4 p-1 text-center ">
		<input
			type="checkbox"
			name="remember_me"
			class="cursor-pointer bg-white/10 border-2 border-metallic-yellow m-auto p-1 accent-metallic-yellow"
		/> Remember Me?
	</label>

	<!-- <fieldset class="bg-white/10 rounded-md w-3/4 mt-6 m-auto p-2 grid grid-cols-2 gap-6">
		<input
			type="text"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Firstname"
			required
		/>
		<input
			type="text"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Lastname"
			required
		/>

		<input
			type="phone"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Phone number"
			required
		/>

		<input
			type="number"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Street Number"
			min="1"
		/>
		<input
			type="text"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Street Name"
		/>
		<input
			type="text"
			class="appearance-none bg-white/10  outline-none p-1 text-white border-b-4  border-metallic-yellow  block text-xl"
			placeholder="Suburb"
		/>
	</fieldset> -->
</form>
