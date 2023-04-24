<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User, UserAddress } from '$lib/interfaces/user';
	import type { PageData } from './$types';
	import AddressForm from './AddressForm.svelte';
	import ChangePassword from './ChangePassword.svelte';
	import PersonalForm from './PersonalForm.svelte';

	export let data: PageData;

	let session = data.session;
	let profile: User | null = null;
	if (data.userProfile) {
		profile = data.userProfile;
	}

	$: inputDisabled = [true, true];

	// function makeEditable(index:any) {
	// 	console.log(index.detail.index);
	// 	if (inputDisabled[index] === true) {
	// 		inputDisabled[index] = false;
	// 	} else {
	// 		inputDisabled[index] = true;
	// 	}
	// }

	let profileForm: any;
	let fullname = profile?.fullname || '';
	let phone: string = profile?.phone || '';
	let userAddress: UserAddress[];
	if (profile?.userAddress) {
		userAddress = profile?.userAddress;
	}

	// let userAddress = profile?.userAddress?.streetAddress;
	//Form current height 537.422px;
</script>

<section class="h-full w-full p-1">
	<form method="POST" use:enhance class="max-h-full overflow-y-auto">
		<ChangePassword />
		<PersonalForm {fullname} {phone} />
		<AddressForm {userAddress} />
	</form>
</section>
