<script lang="ts">
	export let currentStep: number;
	export let fullname: string;
	export let email: string;
	export let phone: string;
	export let fullnameError: string | unknown;
	export let emailError: string | unknown;
	export let phoneError: string | unknown;
</script>

<fieldset class="flex w-full flex-col {currentStep === 2 ? '' : 'hidden'}">
	<legend class="mb-4 text-lg font-medium leading-none text-gray-900">Personal Details</legend>
	<div class="mb-6">
		<label
			for="fullname"
			class="mb-2 block font-medium {fullnameError ? 'text-red-700' : 'text-gray-900'}"
			>Fullname:</label
		>
		<input
			type="text"
			name="fullname"
			id="fullnames"
			class=" block w-full rounded-lg border focus:border-accent focus:ring-primary-20 {fullnameError
				? 'border-red-500 bg-red-50 text-red-900'
				: 'border-gray-300 bg-gray-50  text-gray-900'}"
			placeholder="John Doe"
			value={fullname}
		/>
		{#if fullnameError}
			<p class="block font-medium text-red-600">{fullnameError}</p>
		{/if}
	</div>
	<div class="mb-6">
		<label
			for="email"
			class="mb-2 block font-medium {emailError ? 'text-red-700' : 'text-gray-900'}">Email:</label
		>
		<input
			type="email"
			name="email"
			id="email"
			class="block w-full rounded-lg border {emailError
				? 'border-red-500 bg-red-50 text-red-900'
				: 'border-gray-300 bg-gray-50  text-gray-900'} focus:border-accent focus:ring-primary-20"
			placeholder="john.doe@gmail.com"
			value={email}
		/>
		{#if emailError}
			<p class="block font-medium text-red-600">{emailError}</p>
		{/if}
	</div>
	<div class="mb-6">
		<label
			for="fullname"
			class="mb-2 block font-medium {phoneError ? 'text-red-700' : 'text-gray-900'}">Phone:</label
		>
		<input
			type="tel"
			name="phone"
			id="phone"
			class="w-ful block rounded-lg border {phoneError
				? 'border-red-500 bg-red-50 text-red-900'
				: 'border-gray-300 bg-gray-50  text-gray-900'} focus:border-accent focus:ring-primary-20"
			placeholder="0434-578-586"
			value={phone}
		/>
		{#if phoneError}
			<p class="block font-medium text-red-600">{phoneError}</p>
		{/if}
	</div>
</fieldset>
