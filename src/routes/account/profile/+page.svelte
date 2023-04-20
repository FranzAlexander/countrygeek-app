<script lang="ts">
	import type { User, UserAddress } from '$lib/interfaces/user';
	import type { PageData } from './$types';

	export let data: PageData;

	let { session, profile } = data;

	let inputDisabled: boolean[] = [true, true];

	function makeEditable(index: number) {
		inputDisabled[index] = false;
	}

	console.log(profile);

	let profileForm: any;
	let fullName: string | null;
	let phone: string | null;
	let streetAddress: string | null;
	let city: string | null;
	let postcode: string | null;

	if (profile) {
		fullName = profile.fullname;
		phone = profile.phone;
		if (Array.isArray(profile.user_address)) {
			streetAddress = profile.user_address[0]?.street_address ?? null;
			city = profile.user_address[0]?.city ?? null;
			postcode = profile.user_address[0]?.postcode ?? null;
		}
	}

	// let userAddress = profile?.userAddress?.streetAddress;
	//Form current height 537.422px;
</script>

<section class="flex w-3/4 flex-col gap-10">
	<form action="" class="flex flex-col rounded-lg bg-country-geek-white" bind:this={profileForm}>
		<h2 class="border-b-2 border-gray-400 p-2 text-3xl text-gray-900">Profile Details</h2>
		<div class="flex justify-between gap-2 border-b-2 border-gray-300 p-1">
			<div class="flex flex-col">
				<label for="profile_email" class="p-2 text-2xl text-gray-900">Email:</label>
				<input
					type="email"
					id="profile_email"
					name="email"
					disabled
					value={session.user.email}
					class="p-2 text-xl text-gray-900 disabled:bg-transparent"
				/>
			</div>
			<button
				type="button"
				class="mr-2 h-min self-center rounded-lg bg-country-geek-blue p-2 text-xl text-country-geek-white"
				>Edit</button
			>
		</div>

		<div class="flex justify-between gap-2 border-b-2 border-gray-300 p-1">
			<div class="flex flex-col">
				<label for="profile_fullname" class="p-2 text-2xl text-gray-900">Fullname:</label>
				<input
					type="text"
					id="profile_fullname"
					name="fullname"
					value={fullName}
					disabled={inputDisabled[0]}
					class="p-2 text-xl text-gray-900 disabled:bg-transparent"
				/>
			</div>
			<button
				type="button"
				class="mr-2 h-min self-center rounded-lg bg-country-geek-blue p-2 text-xl text-country-geek-white"
				>Edit</button
			>
		</div>

		<div class="flex justify-between gap-2 p-1">
			<div class="flex flex-col">
				<label for="profile_phone_number" class="p-2 text-2xl text-gray-900">Phone Number:</label>
				<input
					type="text"
					id="profile_phone_number"
					name="phone_number"
					disabled={inputDisabled[1]}
					value={phone}
					class="p-2 text-base text-gray-900 disabled:bg-transparent"
				/>
			</div>
			<button
				type="button"
				class="mr-2 h-min self-center rounded-lg bg-country-geek-blue p-2 text-xl text-country-geek-white"
				>Edit</button
			>
		</div>
	</form>

	<form action="" class="flex flex-col rounded-lg bg-country-geek-white">
		<div class="flex p-1">
			<button
				type="button"
				class="rounded-lg bg-country-geek-blue p-2 text-2xl text-country-geek-white"
				>Change Password</button
			>
		</div>
	</form>

	<form action="" class="flex flex-col rounded-lg bg-country-geek-white">
		<h2 class="border-b-2 border-gray-400 p-2 text-3xl text-gray-900">Address Details</h2>
		<div class="flex flex-col">
			<label for="" class="p-2 text-2xl text-gray-900">Street Address:</label>
			<input
				type="text"
				name=""
				id=""
				class="p-2 text-base text-gray-900 disabled:bg-transparent"
				value={streetAddress}
			/>
		</div>

		<div class="flex flex-col">
			<label for="" class="text-gray p-2 text-2xl">City/Suburb:</label>
			<input
				type="text"
				name=""
				id=""
				class="text-gray p-2 text-base disabled:bg-transparent"
				value={city}
			/>
		</div>

		<div class="flex flex-col">
			<label for="" class="text-gray p-2 text-2xl">Postcode:</label>
			<input
				type="text"
				name=""
				id=""
				class="text-gray p-2 text-base disabled:bg-transparent"
				value={postcode}
			/>
		</div>
	</form>
</section>
