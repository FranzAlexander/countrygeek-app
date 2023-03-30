<form
	action=""
	method="POST"
	class="m-auto flex w-1/3 flex-col rounded-lg border-2 border-gray-300 bg-country-geek-white p-4 shadow-md"
>
	<fieldset class="mb-2 flex flex-col p-2">
		<label for="booking_description" class="mb-2 block text-2xl text-gray-800"
			>Booking Description:</label
		>
		<textarea
			name="booking_description"
			id=""
			cols="30"
			rows="10"
			class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
		/>
	</fieldset>

	<fieldset class="mb-2 flex flex-col gap-4 p-2">
		<div class="flex flex-col">
			<label for="fullname" class="mb-2 block text-2xl text-gray-800">Fullname:</label>
			<input
				type="text"
				name="fullname"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
				required
			/>
		</div>
		<div class="flex flex-col">
			<label for="email" class="mb-2 block text-2xl text-gray-800">Email:</label>
			<input
				type="email"
				name="email"
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
				required
			/>
		</div>
		<div class="flex flex-col">
			<label for="phone" class="mb-2 block text-2xl text-gray-800">Phone:</label>
			<input
				type="tel"
				name="phone"
				id=""
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
			/>
		</div>
	</fieldset>

	<fieldset class="mb-2 flex flex-col gap-4 p-2">
		<div class="flex flex-col">
			<label for="address" class="mb-2 block text-2xl text-gray-800">Address:</label>
			<input
				type="text"
				name="address"
				id=""
				class="rounded-md border-2 border-gray-300 bg-transparent p-1 text-xl text-gray-800 focus:border-country-geek-test-accent focus:outline-none"
			/>
		</div>
	</fieldset>
	<button
		type="button"
		class="m-auto w-1/4 rounded-md bg-country-geek-test p-2 text-2xl text-country-geek-white"
		>Next</button
	>
</form>
