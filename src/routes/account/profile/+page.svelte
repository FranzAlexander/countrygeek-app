<script lang="ts">
	import type { User } from '$lib/interfaces/user';
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
	let streetAddress: string | null;

	if (profile) {
		fullName = profile.fullname;
	}

	if (Array.isArray(profile?.user_address)) {
	}
	// let user: User | null;

	// user = profile;

	// let fullName = user?.fullname;

	// console.log(user?.fullname);

	// let userAddress = profile?.userAddress?.streetAddress;
	//Form current height 537.422px;
</script>

<section class="flex w-full flex-col gap-10">
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
				class="h- mr-2 h-min self-center rounded-lg bg-country-geek-blue p-2 text-xl text-country-geek-white"
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
					value={profile?.phone}
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
	<!-- 
	<form action="" class="flex flex-col rounded-lg bg-country-geek-white">
		<h2 class="border-b-2 border-gray-400 p-2 text-3xl text-gray-900">Address Details</h2>
		<div class="flex justify-between gap-2 border-b-2 border-gray-300">
			<label for="" class="p-2 text-2xl text-gray-900">Street Address:</label>
			<input
				type="text"
				class="p-2 text-2xl text-gray-900 disabled:bg-transparent"
				disabled
				value={userAddress}
			/>
		</div>
		<div class="flex justify-between gap-2 border-b-2 border-gray-300">
			<label for="" class="p-2 text-2xl text-gray-900">City:</label>
			<input
				type="text"
				class="p-2 text-2xl text-gray-900 disabled:bg-transparent"
				disabled
				value={profile?.userAddress?.city}
			/>
		</div>
		<div class="flex justify-between gap-2">
			<label for="" class="p-2 text-2xl text-gray-900">Postcode:</label>
			<input type="text" name="" id="" value={profile?.userAddress?.postcode} />
		</div>
	</form> -->
	<!-- <div class="flex gap-8">
		<div class="rounded-lg bg-country-geek-white p-4">
			<div
				class="mb-4 flex items-center justify-between gap-6 border-b-2 border-country-geek-dark-gray pb-2"
			>
				<h1 class="text-3xl">Personal Detials</h1>
				<button
					class="rounded-lg bg-country-geek-blue p-2 text-base text-country-geek-white hover:bg-country-geek-test-accent"
					on:click={() => {
						makeEditable(0);
					}}>Edit</button
				>
			</div>
			<form action="" class="flex flex-col gap-4" bind:this={profileForm}>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Fullname:</label>
					<input
						type="text"
						value={fullName}
						disabled={groupDisabled[0]}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none disabled:border-transparent"
					/>
				</div>

				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Email:</label>
					<input
						type="email"
						disabled
						value={session.user.email}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none disabled:border-transparent"
					/>
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Phone:</label>
					<input
						type="text"
						disabled={groupDisabled[0]}
						class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-900 focus:border-country-geek-test-accent focus:outline-none invalid:focus:border-pink-500 invalid:focus:text-pink-500"
					/>
				</div>
			</form>
		</div>

		<div>
			<form action="">
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Street Address:</label>
					<input type="text" />
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">City/Suburb:</label>
					<input type="text" />
				</div>
				<div class="flex flex-col">
					<label for="" class="mb-2 block text-2xl text-gray-900">Postcode:</label>
					<input type="text" />
				</div>
			</form>
		</div>
	</div> -->
</section>
