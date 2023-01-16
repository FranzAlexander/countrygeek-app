<script lang="ts">
	import type { User } from '$lib/interfaces/user';
	// let user: User = {
	// 	first_name: '',
	// 	last_name: '',
	// 	email: '',
	// 	phone_number: 0,
	// 	address: { street_number: 0, street_name: '', suburb: '', postcode: 0, state: '' }
	// };
	export let user: User;
</script>

<section>
	<div>
		<h2>Firstname</h2>
		<input type="text" bind:value={user.first_name} />
	</div>

	<div>
		<h2>Lastname</h2>
		<input type="text" bind:value={user.last_name} />
	</div>

	<div>
		<h2>Email</h2>
		<input type="email" bind:value={user.email} />
	</div>

	<div>
		<h2>Phone Number</h2>
		<input type="number" bind:value={user.phone_number} />
	</div>
</section>
