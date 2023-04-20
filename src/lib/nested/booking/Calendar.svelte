<script lang="ts">
	import type { DayData } from '$lib/interfaces/booking';
	import { onMount } from 'svelte';

	export let input_selection: number;

	// Months of the year.
	const month_names: string[] = [
		'January',
		'Feburary',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	// Days of the week.
	const day_names: string[] = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	// Get the current date.
	const current_date: Date = new Date();
	const current_month: number = current_date.getMonth();

	let selected_month: number = current_month;

	let day_data: DayData[] = [];

	let disable_back: boolean = true;
	let disable_next: boolean = false;

	onMount(async () => {
		generate_month(selected_month);
	});

	function generate_month(p_selected_month: number) {
		let month_days: DayData[] = [];
		// Get first day of this month.
		const first_day: number = new Date(current_date.getFullYear(), p_selected_month, 1).getDay();

		// Get last day of this month.
		const last_day: number = new Date(
			current_date.getFullYear(),
			p_selected_month + 1,
			0
		).getDate();

		// Get last months, last day of the month.
		const last_month_last_day: number = new Date(
			current_date.getFullYear(),
			p_selected_month,
			0
		).getDate();

		let day_index: number = 0;
		for (let i = first_day; i > 0; i--) {
			month_days.push({
				day: day_names[day_index],
				date: last_month_last_day - i + 1,
				bookings: 0,
				booked_out: false,
				month: month_names[p_selected_month - 1]
			});

			day_index++;

			if (day_index === day_names.length) {
				day_index = 0;
			}
		}

		day_index = first_day;

		for (let i = 0; i < last_day; i++) {
			month_days.push({
				day: day_names[day_index],
				date: i + 1,
				bookings: 0,
				booked_out: false,
				month: month_names[p_selected_month]
			});

			day_index++;

			if (day_index === day_names.length) {
				day_index = 0;
			}
		}

		if (selected_month > current_month) {
			disable_back = false;
		} else {
			disable_back = true;
		}

		if (selected_month === month_names.length - 1) {
			disable_next = true;
		} else {
			disable_next = false;
		}
		day_data = month_days;
	}

	// Current month selected by the user.
	export let date_selected: DayData;

	function different_month(month: string) {
		return month !== month_names[selected_month];
	}

	function prev_dates(date: number) {
		if (selected_month === current_month) {
			return date < current_date.getDate();
		}
	}

	function check_back() {
		return selected_month < current_month;
	}
	function check_next() {
		return selected_month === 12;
	}

	function change_month(new_month: number) {
		selected_month = new_month;
		generate_month(selected_month);
	}
</script>

<div class="flex flex-col gap-2">
	<div class="mt-3 flex justify-evenly p-4 text-white">
		<button
			type="button"
			disabled={disable_back}
			class="disabled:opacity-10"
			on:click={() => change_month(selected_month - 1)}>Back</button
		>
		<h2 class="text-4xl text-white">{month_names[selected_month]}</h2>
		<button
			type="button"
			disabled={disable_next}
			class="disabled:opacity-10"
			on:click={() => change_month(selected_month + 1)}>Next</button
		>
	</div>
	<div
		class="grid grid-cols-7 items-center justify-evenly divide-y-2 bg-neutral-900 p-2 text-center text-white"
	>
		{#each day_names as day}
			<h2 class=" text-2xl">{day}</h2>
		{/each}
		{#each day_data as day}
			<label>
				<input
					disabled={different_month(day.month) || prev_dates(day.date)}
					type="radio"
					bind:group={date_selected}
					value={day}
					class="peer hidden rounded-none"
				/>
				<div
					class="bg-country-geek-background hover:bg-country-geek-light-blue/40 peer-checked:bg-country-geek-light-blue/40 m-auto flex h-32 w-full items-center justify-center text-center text-4xl peer-disabled:opacity-30"
				>
					{day.date}
				</div>
			</label>
		{/each}
	</div>

	<button
		type="button"
		value=""
		class="rounded-md bg-country-geek-test-purple p-2 text-white shadow shadow-black/80"
		on:click={() => (input_selection = 0)}>Done</button
	>
</div>
