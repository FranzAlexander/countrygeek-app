<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let category_id: number = 0;
	export let type_id: number = 0;

	let form_step: boolean[] = [false, true, true];

	let continue_form: boolean = false;
	let continue_form2: boolean = false;

	let breif_description: string = '';

	let form_element: Element;

	let input_values: string[] = ['', '', '', '', '', '', '', ''];

	function change_form_step(index: number) {
		if (index === 0) {
			form_step[0] = false;
			form_step[1] = true;
			form_step[2] = true;
		} else if (index == 1) {
			form_step[0] = true;
			form_step[1] = false;
			form_step[2] = true;
		} else {
			form_step[0] = true;
			form_step[1] = true;
			form_step[2] = false;
		}
	}

	function validate_description() {
		if (breif_description !== '') {
			continue_form = true;
		} else {
			continue_form = false;
		}
	}

	function validate_inputs() {
		for (let i = 0; i < input_values.length; i++) {
			if (input_values[i] !== '') {
				continue_form2 = true;
			} else {
				continue_form2 = false;
			}
		}
	}

	onMount(() => {
		form_element.scrollIntoView({ behavior: 'smooth' });
	});
</script>

<form
	bind:this={form_element}
	action=""
	method="POST"
	class="flex flex-col bg-neutral-800 rounded-lg pb-2 w-2/4"
	id="booking-form"
	use:enhance
>
	<div class="flex justify-evenly rounded-lg">
		<button
			type="button"
			class="text-2xl p-3  w-full rounded-tl-lg {!form_step[0]
				? 'to-neutral-800 '
				: 'bg-neutral-700'} hover:bg-neutral-700"
			on:click={() => {
				change_form_step(0);
			}}>{'\u2460'} Service Details</button
		>
		<button
			type="button"
			class="text-2xl p-3 w-full  {!form_step[1]
				? 'to-neutral-800 '
				: 'bg-neutral-700'} hover:bg-neutral-700"
			disabled={!continue_form}
			on:click={() => {
				change_form_step(1);
			}}>{'\u2461'} Personal Details</button
		>
		<button
			type="button"
			class="text-2xl p-3 w-full rounded-tr-lg {!form_step[2]
				? 'to-neutral-800 '
				: 'bg-neutral-700'} hover:bg-neutral-700">{'\u2462'} Confirm</button
		>
	</div>

	<fieldset class="flex flex-col p-2 {form_step[0] ? 'hidden' : ''}">
		<label for="brief-description">Brief Description:</label>
		<textarea
			name="brief-description"
			id=""
			cols="30"
			rows="10"
			class="bg-neutral-700 rounded-md p-1"
			required
			bind:value={breif_description}
			on:input={() => {
				validate_description();
			}}
		/>
		<input type="text" name="category_id" hidden value={category_id} />
		<input type="text" name="type_id" hidden value={type_id} />

		<button
			type="button"
			class="p-2 text-xl bg-country-geek-light-purple rounded-lg mt-2 disabled:opacity-20"
			disabled={!continue_form}
			on:click={() => {
				change_form_step(1);
			}}>Next</button
		>
	</fieldset>

	<fieldset class="flex flex-col p-2 gap-2 w-1/3 m-auto {form_step[1] ? 'hidden' : ''}">
		<label for="firstname">Firstname:</label>
		<input
			type="text"
			name="firstname"
			bind:value={input_values[0]}
			on:input={() => {
				validate_inputs();
			}}
			required
		/>
		<label for="lastname">Lastname:</label>
		<input
			type="text"
			name="lastname"
			id=""
			bind:value={input_values[1]}
			on:input={() => {
				validate_inputs();
			}}
			required
		/>
		<label for="email">Email:</label>
		<input
			type="email"
			name="email"
			id=""
			class="personal-input"
			bind:value={input_values[2]}
			on:input={() => {
				validate_inputs();
			}}
		/>
		<label for="phone">Phone Number:</label>
		<input
			type="tel"
			name="phone"
			id=""
			class="personal-input"
			bind:value={input_values[3]}
			on:input={() => {
				validate_inputs();
			}}
		/>

		<br />
		<h2 class="text-2xl border-b-2 border-cyan-500">Address Details</h2>
		<br />

		<label for="streetaddress">Street Address:</label>
		<input
			type="text"
			name="streetaddress"
			id=""
			class="personal-input"
			bind:value={input_values[4]}
			on:input={() => {
				validate_inputs();
			}}
			required
		/>
		<label for="city">City:</label>
		<input
			type="text"
			name="city"
			id=""
			class="personal-input"
			bind:value={input_values[5]}
			on:input={() => {
				validate_inputs();
			}}
			required
		/>
		<label for="country">Country:</label>
		<input
			type="text"
			name="country"
			id=""
			class="personal-input"
			bind:value={input_values[6]}
			on:input={() => {
				validate_inputs();
			}}
		/>
		<label for="postcode">Postcode:</label>
		<input
			type="text"
			name="postcode"
			id="postcode-input"
			class="personal-input"
			bind:value={input_values[7]}
			on:input={() => {
				validate_inputs();
			}}
			required
		/>
		<div class="flex justify-between">
			<button
				type="button"
				class="p-2 text-xl bg-country-geek-light-purple rounded-lg mt-2 disabled:opacity-20"
				on:click={() => {
					change_form_step(0);
				}}>Back</button
			>
			<button
				type="button"
				class="p-2 text-xl bg-country-geek-light-purple rounded-lg mt-2 disabled:opacity-20"
				disabled={!continue_form2}
				on:click={() => {
					change_form_step(2);
				}}>Next</button
			>
		</div>
	</fieldset>

	<fieldset class="flex flex-col p-2 gap-2 {form_step[2] ? 'hidden' : ''}">
		<label for="">Confirm</label>
		<button type="submit">Book</button>
	</fieldset>
</form>

<style>
	label {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	input {
		padding: 0.25rem;
		background-color: #404040;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: rgb(255 255 255 / 0.2);
	}

	#postcode-input {
		width: 40%;
	}
</style>
