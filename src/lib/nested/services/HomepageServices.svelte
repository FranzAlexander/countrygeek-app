<script lang="ts">
	import internet_icon from '$lib/icons/pop_services/internet.svg';
	import mail_icon from '$lib/icons/pop_services/Mail.svg';
	import printer_icon from '$lib/icons/pop_services/Printer.svg';
	import repair_icon from '$lib/icons/pop_services/RepairTools.svg';
	import setup_icon from '$lib/icons/pop_services/setup.svg';
	let x = 'sadjk';
</script>

<section class="flex w-full justify-between bg-country-geek-blue text-white ">
	<div class="flex flex-col flex-nowrap gap-5">
		<h3 class="text-3xl ml-24">Our most popular services!</h3>
		<div class="flex gap-5 justify-evenly">
			<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
				<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Repairs</h3>
				<img src={repair_icon} alt="Country Geek Repair Service" class="object-fit flex-shrink-0" />
			</div>
			<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
				<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Emails</h3>
				<img
					src={mail_icon}
					alt="Country Geek Repair Service"
					class="object-scale-down flex-shrink-0"
				/>
			</div>
			<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
				<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Printers</h3>
				<img
					src={printer_icon}
					alt="Country Geek Repair Service"
					class="object-scale-down  flex-shrink-0"
				/>
			</div>
			<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
				<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Internet</h3>
				<img
					src={internet_icon}
					alt="Country Geek Repair Service"
					class="object-scale-down  flex-shrink-0"
				/>
			</div>
			<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
				<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Setup</h3>
				<img
					src={setup_icon}
					alt="Country Geek Repair Service"
					class="object-scale-down  flex-shrink-0"
				/>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-5">
		<h3 class="text-3xl">
			Check out what services we have to offer. Everything from Repairs, Setup and much more!
		</h3>
		<div class="flex gap-5">
			<a
				href="/services"
				class="border-2 border-country-geek-light-purple p-2 text-2xl  hover:bg-country-geek-light-purple focus:bg-country-geek-light-purple"
				>See More!</a
			>
			<a
				href="/booking"
				class="bg-country-geek-light-purple p-2 text-2xl hover:shadow-lg hover:shadow-country-geek-dark-purple hover:-translate-y-1  focus:shadow-lg focus:shadow-country-geek-dark-purple focus:-translate-y-1"
				>Book Now!</a
			>
		</div>
	</div>
</section>
