<script lang="ts">
	import type { DayData } from '$lib/interfaces/booking';
	import Calendar from '$lib/nested/booking/Calendar.svelte';
	import DeviceRepairOption from '$lib/nested/booking/DeviceRepairOption.svelte';
	import StepperIndicator from '$lib/nested/booking/StepperIndicator.svelte';
	import UserAddress from '$lib/nested/booking/UserAddress.svelte';
	import UserBookingDetails from '$lib/nested/booking/UserBookingDetails.svelte';
	import UserProfileDetials from '$lib/nested/booking/UserProfileDetials.svelte';

	// Menu selection icons.
	let service_icon: string = '';
	let device_icon: string = '';
	let descirption_icon: string = '';
	let date_icon: string = '';

	// 0 = Main menu.
	// 1 = Service selection.
	// 2 = Description input.
	// 3 = Device selection.
	// 4 = Date selection.
	// Order goes Serivce->Device->Description->Date
	let input_option: number = 0;

	// let service_type: string = '';
	let booking_step: number = 0;

	let device_selection_enabled: boolean = false;

	const services: string[] = [
		'Repair & Maintenance',
		'Setup & Installation',
		'Email',
		'Internet',
		'Printer'
	];

	const devices: string[] = ['Computer', 'Laptop', 'Phone', 'IPhone', 'Tablet', 'Mac', 'IPad'];

	let selected_service: string = 'No Service Selected!';
	let selected_device: string = 'No Service Selected!';
	let service_description: string = '';
	let selected_date: DayData = { day: '', month: '', date: 0, bookings: 0, booked_out: false };

	// Service selected.
	let service_selected: boolean = false;

	// Device selected.
	let device_selected: boolean = false;

	// Description entered.
	let description_entered: boolean = false;

	// Date selected.
	let date_selected: boolean = false;

	function nextStep() {
		booking_step++;
	}
	function prevStep() {
		booking_step--;
	}

	function showInput(option: number) {
		input_option = option;
	}

	function enableDeivceSelection(enabled: boolean) {
		device_selection_enabled = enabled;
	}
</script>

<!--Service selection popup-->
<!-- <div class="bg-black/60 absolute w-screen h-screen z-10 flex items-center justify-center">d</div> -->

<div class="bg-oxford-blue w-3/4 rounded-lg m-auto  p-4 shadow-md shadow-black">
	<h2 class="text-center text-white text-6xl p-4 mt-4 mb-4">Booking</h2>

	<div class="">
		<StepperIndicator indicator_step={booking_step} />
		{#if booking_step === 0}
			{#if input_option === 0}
				<div class="grid grid-cols-2 p-6 gap-4 text-white ">
					<!-- Serivce Select -->
					<div
						class="flex flex-col p-4 gap-4 items-center border-2 border-country-geek-test-purple bg-gradient-to-br from-booking-purple to-country-geek-test-purple "
					>
						<h2 class="text-2xl">Please Select Service</h2>
						<button
							type="button"
							value=""
							class="border-box rounded-md bg-country-geek-test-purple shadow border-2 border-metallic-yellow shadow-black/80 p-2"
							on:click={() => showInput(1)}>Click Here!</button
						>

						<div class="flex border-2 border-metallic-yellow border-dashed rounded-md p-2 gap-2 ">
							<img src={service_icon} alt="Booking service type icon" />
							<h2>{selected_service}</h2>
						</div>
					</div>

					<!-- Description -->
					<div
						class="flex flex-col p-4 gap-4 items-center border-2 border-country-geek-test-purple bg-gradient-to-r from-country-geek-test-purple to-booking-blue"
					>
						<h2 class="text-2xl">Enter Brief Description</h2>
						<button
							type="button"
							value=""
							class="border-box rounded-md bg-country-geek-test-purple shadow border-2 border-metallic-yellow shadow-black/80 p-2"
							on:click={() => showInput(2)}>Click Here!</button
						>
						<div
							class="flex border-2 border-country-geek-test-purple border-dashed rounded-md p-2 gap-2"
						>
							<img src={descirption_icon} alt="Booking service type icon" />
							<textarea
								class="bg-neutral-900 p-2 border border-white rounded-md outline-none caret-country-geek-light-blue"
								readonly
								placeholder="Nothing entered!"
								>{service_description}
							</textarea>
						</div>
					</div>

					<!-- Device Select -->
					<div
						class="flex flex-col p-4 gap-4 items-center border-2 border-country-geek-test-purple bg-gradient-to-b from-country-geek-test-purple to-booking-blue"
					>
						<h2 class="text-2xl">Please Select Device</h2>
						<button
							type="button"
							value=""
							class="border-box rounded-md bg-country-geek-test-purple shadow border-2 border-metallic-yellow shadow-black/80 p-2"
							on:click={() => showInput(3)}>Click Here!</button
						>

						<div
							class="flex border-2 border-country-geek-test-purple border-dashed rounded-md p-2 gap-2"
						>
							<img src={device_icon} alt="Booking device type icon" />
							<h2>{selected_device}</h2>
						</div>
					</div>

					<!-- Date select -->
					<div
						class="flex flex-col p-4 gap-4 items-center border-2 border-country-geek-test-purple bg-gradient-to-br from-country-geek-test-purple via-booking-blue to-booking-dark-blue:"
					>
						<h2 class="text-2xl">Please Select A Date</h2>

						<button
							type="button"
							value=""
							class="border-box rounded-md bg-country-geek-test-purple shadow border-2 border-metallic-yellow shadow-black/80 p-2"
							on:click={() => showInput(4)}>Click Here!</button
						>
					</div>
				</div>
			{:else if input_option === 1}
				<div
					class="w-3/4 rounded-lg m-auto mt-4 p-2 text-white bg-neutral-900 flex flex-col items-center"
				>
					<h2 class="text-2xl">Services</h2>
					<div class="grid grid-cols-3 gap-4 p-2 items-center justify-center w-full">
						{#each services as service_opt}
							<label class="w-3/4 h-36 m-auto text-center">
								<input
									type="radio"
									bind:group={selected_service}
									name="service_opt"
									value={service_opt}
									class="rounded-none hidden peer p-2"
								/>
								<div
									class="p-2 rounded border-2 border-transparent bg-white/10 shadow shadow-black/80 peer-checked:border-2 peer-checked:border-country-geek-light-blue peer-checked:shadow-country-geek-light-blue text-lg h-full"
								>
									{service_opt}
								</div>
							</label>
						{/each}
					</div>
					<button
						type="button"
						value=""
						class="rounded-md bg-country-geek-test-purple shadow shadow-black/80 p-2"
						on:click={() => showInput(0)}
					>
						Done
					</button>
				</div>
			{:else if input_option === 2}
				<div
					class="flex flex-col text-white bg-neutral-900 w-3/4 gap-6 m-auto mt-4 p-4 rounded-md items-center"
				>
					<textarea
						name=""
						id=""
						bind:value={service_description}
						cols="30"
						rows="10"
						placeholder="Click here to start typing! E.g. Cannot connect to internet."
						class="bg-neutral-900 p-2 border border-white rounded-md outline-none w-full focus:border-country-geek-light-blue caret-country-geek-light-blue"
					/>
					<button
						type="button"
						value=""
						class="rounded-md w-1/4 bg-country-geek-test-purple shadow shadow-black/80 p-2"
						on:click={() => showInput(0)}
					>
						Done
					</button>
				</div>
			{:else if input_option === 3}
				<div
					class="w-3/4 rounded-lg m-auto mt-4 p-2 text-white bg-neutral-900 flex flex-col items-center"
				>
					<h2 class="text-2xl">Devices</h2>
					<div class="grid grid-cols-3 gap-4 p-2 items-center justify-center overflow-auto w-full">
						{#each devices as device_opt}
							<label class="w-3/4 h-36 m-auto text-center">
								<input
									type="radio"
									bind:group={selected_device}
									name="device_opt"
									value={device_opt}
									class="rounded-none hidden peer p-2"
								/>
								<div
									class="p-2 rounded border-2 border-transparent bg-white/10 shadow shadow-black/80 peer-checked:border-2 peer-checked:border-country-geek-light-blue peer-checked:shadow-country-geek-light-blue text-lg h-full"
								>
									{device_opt}
								</div>
							</label>
						{/each}
					</div>
					<button
						type="button"
						value=""
						class="rounded-md bg-country-geek-test-purple shadow shadow-black/80 p-2"
						on:click={() => showInput(0)}
					>
						Done
					</button>
				</div>
			{:else if input_option === 4}
				<Calendar bind:date_selected={selected_date} bind:input_selection={input_option} />
			{/if}
		{:else if booking_step === 1}
			<UserBookingDetails />
		{:else if booking_step === 2}{/if}
		<div class="flex justify-evenly mt-4">
			<button
				on:click={() => {
					if (booking_step > 0) {
						--booking_step;
					}
				}}
				class="text-white p-2 border-2 border-metallic-yellow rounded-md text-xl"
			>
				Back
			</button>
			<button
				on:click={() => {
					if (booking_step < 2) {
						++booking_step;
					}
				}}
				class="text-white p-2 border-2 border-metallic-yellow rounded-md text-xl"
			>
				Next
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
