<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User, UserAddress } from '$lib/interfaces/user';
	import type { ActionData, PageData } from './$types';
	import AddressForm from './AddressForm.svelte';
	import ChangePassword from './ChangePassword.svelte';
	import PersonalForm from './PersonalForm.svelte';

	export let form: ActionData;
	export let data: PageData;

	let session = data.session;
	let profile: User | null = null;
	if (data.userProfile) {
		profile = data.userProfile;
	}

	let fullname = profile?.fullname || '';
	let phone: string = profile?.phone || '';
	let userAddress: UserAddress[];
	if (profile?.userAddress) {
		userAddress = profile?.userAddress;
	}
</script>

<section class="w-full p-1">
	<form method="POST" use:enhance class="   ">
		<ChangePassword />
		<PersonalForm {fullname} {phone} />
		<AddressForm
			{userAddress}
			streetError={form?.errors?.streetAddress || ''}
			postcodeError={form?.errors?.postcode || ''}
			suburbError={form?.errors?.suburb || ''}
		/>
	</form>
</section>
