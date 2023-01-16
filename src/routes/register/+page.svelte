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

<UserPersonalDetails bind:user />
