<div class="m-auto flex w-3/4 gap-5">
	<div
		class="ml-10 flex flex-col items-center rounded bg-country-geek-white p-2 text-2xl text-gray-900"
	>
		<h2 class="border-b-2 border-gray-500 text-3xl text-gray-900">Account</h2>
		<a
			href="/account/profile"
			class="mt-2 inline-block w-full items-center rounded px-3 hover:bg-gray-300">Profile</a
		>
		<a
			href="/account/booking"
			class="mt-2 inline-block w-full items-center rounded px-3 hover:bg-gray-300">Bookings</a
		>
	</div>
	<div class="w-2/3">
		<slot />
	</div>
</div>
