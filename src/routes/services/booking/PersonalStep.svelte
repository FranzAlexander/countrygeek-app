<script lang="ts">
	export let currentStep: number;
	export let fullname: string;
	export let email: string;
	export let phone: string;
</script>

<fieldset class="flex w-full flex-col {currentStep === 2 ? '' : 'hidden'}">
	<legend class="mb-4 text-lg font-medium leading-none text-gray-900">Personal Details</legend>
	<div class="mb-6">
		<label for="fullname" class="mb-2 block font-medium text-gray-900">Fullname:</label>
		<input
			type="text"
			name="fullname"
			id="fullnames"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-accent focus:ring-primary-20"
			placeholder="John Doe"
			value={fullname}
		/>
	</div>
	<div class="mb-6">
		<label for="email" class="mb-2 block font-medium text-gray-900">Email:</label>
		<input
			type="email"
			name="email"
			id="email"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-accent focus:ring-primary-20"
			placeholder="john.doe@gmail.com"
			value={email}
		/>
	</div>
	<div class="mb-6">
		<label for="fullname" class="mb-2 block font-medium text-gray-900">Phone:</label>
		<input
			type="tel"
			name="phone"
			id="phone"
			class="w-ful block rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-accent focus:ring-primary-20"
			placeholder="0434-578-586"
			value={phone}
		/>
	</div>
</fieldset>
