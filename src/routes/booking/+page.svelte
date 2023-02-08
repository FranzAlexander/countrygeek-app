<script lang="ts">
	import DeviceRepairOption from '$lib/nested/booking/DeviceRepairOption.svelte';

	let service_selected: boolean = false;
	let booking_step: number = 0;

	function nextStep() {
		booking_step++;
	}
	function prevStep() {
		booking_step--;
	}
</script>

<h2 class="text-center text-white text-6xl p-4 mt-4">Booking</h2>
<div class="w-3/4 bg-white/10 rounded-lg m-auto mt-4 p-4">
	<ol class="flex items-center w-3/4 p-2 m-auto border-white/10 border-2 rounded-lg z-10">
		<li
			class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1  after:border-country-geek-purple after:border-2 after:inline-block"
		>
			<span
				class="flex items-center justify-center {booking_step == 0
					? 'animate-pulse'
					: ''} bg-country-geek-purple w-8 h-8 rounded-full shrink-0"
			/>
		</li>
		<li
			class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1  after:border-country-geek-purple after:border-2 after:inline-block "
		>
			<span
				class="flex items-center justify-center {booking_step === 0
					? 'border-2 border-country-geek-purple'
					: 'bg-country-geek-purple animate-pulse'} w-8 h-8 rounded-full shrink-0"
			/>
		</li>
		<li class="flex items-center justify-center">
			<span
				class="flex items-center justify-center border-2 border-country-geek-purple w-8 h-8 rounded-full shrink-0"
			/>
		</li>
	</ol>

	<form method="POST">
		{#if booking_step === 0}
			<ul class="flex justify-evenly p-2 gap-2 text-white mt-8">
				<li class=" w-1/4 h-96">
					<input
						type="radio"
						name="service_type"
						id="repair-selection"
						class="hidden rounded-none peer/repair"
					/>
					<label
						for="repair-selection"
						class="h-full block relative border-2 border-white/5 shadow shadow-black/80 rounded hover:border-white/10 cursor-pointer hover:shadow-none peer-checked/repair:border-country-geek-light-blue peer-checked/repair:shadow-country-geek-light-blue transition-all ease-in-out duration-500  text-center"
					>
						<span class="text-4xl ">Repair</span>
					</label>
				</li>
				<li class="w-1/4 h-96">
					<input
						type="radio"
						name="service_type"
						id="email-selection"
						class="hidden rounded-none peer"
					/>
					<label
						for="email-selection"
						class="block h-96 relative border-2 border-white/5 shadow shadow-black/80 rounded hover:border-white/10 cursor-pointer hover:shadow-none peer-checked:border-country-geek-light-blue peer-checked:shadow-country-geek-light-blue transition-all ease-in-out duration-500 text-center"
						><span class="text-4xl">Email</span></label
					>
				</li>
				<li class="w-1/4 h-96">
					<input
						type="radio"
						name="service_type"
						id="internet-selection"
						class="hidden rounded-none peer"
					/>
					<label
						for="internet-selection"
						class="block h-96  relative border-2 border-white/5 shadow shadow-black/80 rounded hover:border-white/10 cursor-pointer hover:shadow-none peer-checked:border-country-geek-light-blue peer-checked:shadow-country-geek-light-blue  transition-all ease-in-out duration-500 text-center"
						><span class="text-4xl">Internet</span></label
					>
				</li>
			</ul>
		{/if}
		{#if booking_step === 1}
			<DeviceRepairOption />
		{/if}
		<div />
		<div class="flex justify-between p-2 text-white mt-6">
			<button
				type="button"
				class="border-2 border-white/5 bg-test-gold p-2 rounded text-xl "
				on:click={prevStep}>Back</button
			>
			<button
				type="button"
				class="border-2 border-white/5 bg-test-gold p-2 rounded text-xl "
				on:click={nextStep}>Next</button
			>
		</div>

		<input type="submit" />
	</form>
</div>
