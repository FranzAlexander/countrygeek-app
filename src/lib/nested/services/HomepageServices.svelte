<script lang="ts">
	import internet_icon from '$lib/icons/pop_services/internet.svg';
	import mail_icon from '$lib/icons/pop_services/Mail.svg';
	import printer_icon from '$lib/icons/pop_services/Printer.svg';
	import repair_icon from '$lib/icons/pop_services/RepairTools.svg';
	import setup_icon from '$lib/icons/pop_services/setup.svg';
	let x = 'sadjk';
</script>

<section class="flex w-full justify-between bg-country-geek-blue text-white">
	<div class="flex flex-col flex-nowrap gap-5">
		<h3 class="ml-24 text-3xl">Our most popular services!</h3>
		<div class="flex justify-evenly gap-5">
			<div class="flex w-[10%] flex-col items-center rounded bg-white/20">
				<h3 class="w-full bg-country-geek-blue/50 text-center text-xl">Repairs</h3>
				<img src={repair_icon} alt="Country Geek Repair Service" class="object-fit flex-shrink-0" />
			</div>
			<div class="flex w-[10%] flex-col items-center rounded bg-white/20">
				<h3 class="w-full bg-country-geek-blue/50 text-center text-xl">Emails</h3>
				<img
					src={mail_icon}
					alt="Country Geek Repair Service"
					class="flex-shrink-0 object-scale-down"
				/>
			</div>
			<div class="flex w-[10%] flex-col items-center rounded bg-white/20">
				<h3 class="w-full bg-country-geek-blue/50 text-center text-xl">Printers</h3>
				<img
					src={printer_icon}
					alt="Country Geek Repair Service"
					class="flex-shrink-0 object-scale-down"
				/>
			</div>
			<div class="flex w-[10%] flex-col items-center rounded bg-white/20">
				<h3 class="w-full bg-country-geek-blue/50 text-center text-xl">Internet</h3>
				<img
					src={internet_icon}
					alt="Country Geek Repair Service"
					class="flex-shrink-0 object-scale-down"
				/>
			</div>
			<div class="flex w-[10%] flex-col items-center rounded bg-white/20">
				<h3 class="w-full bg-country-geek-blue/50 text-center text-xl">Setup</h3>
				<img
					src={setup_icon}
					alt="Country Geek Repair Service"
					class="flex-shrink-0 object-scale-down"
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
				class="border-2 border-country-geek-light-purple p-2 text-2xl hover:bg-country-geek-light-purple focus:bg-country-geek-light-purple"
				>See More!</a
			>
			<a
				href="/booking"
				class="bg-country-geek-light-purple p-2 text-2xl hover:-translate-y-1 hover:shadow-lg hover:shadow-country-geek-dark-purple focus:-translate-y-1 focus:shadow-lg focus:shadow-country-geek-dark-purple"
				>Book Now!</a
			>
		</div>
	</div>
</section>
