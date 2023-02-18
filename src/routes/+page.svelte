<script lang="ts">
	import Card from '$lib/nested/Card.svelte';
	import type { PageData } from './$types';

	import internet_icon from '$lib/icons/pop_services/internet.svg';
	import mail_icon from '$lib/icons/pop_services/Mail.svg';
	import printer_icon from '$lib/icons/pop_services/Printer.svg';
	import repair_icon from '$lib/icons/pop_services/RepairTools.svg';
	import setup_icon from '$lib/icons/pop_services/setup.svg';
</script>

<section class="relative min-h-[900px] w-full  text-white ">
	<div class="flex gap-4 w-full items-center justify-between pt-10 p-5 ">
		<p class="text-6xl ml-[11%] drop-shadow-lg">
			Providing tech services to the<br /> <span class="text-country-geek-gold">SOUTH WEST!</span>
		</p>

		<!-- <a href="/booking" class="text-xl bg-country-geek-dark-purple w-fit p-3 rounded-full"
			>Book Now!</a
		> -->
		<div class="grid grid-cols-2 gap-5">
			<div class="bg-country-geek-blue rounded-lg p-4 flex flex-col min-h-[250px]">
				<h2 class="text-country-geek-gold text-4xl border-b p-2">Services</h2>
				<p class="text-2xl p-2">
					Plenty of tech services on ofter to help you with any problem that you might have.<br /> From
					a phone being fixed to internet setup, to so much more!
				</p>
				<a
					href="/services"
					class="text-2xl p-2 bg-country-geek-dark-purple rounded m-auto shadow shadow-black"
					>Services!</a
				>
			</div>
			<div class="bg-country-geek-blue rounded-lg p-4 flex flex-col min-h-[250px]">
				<h2 class="text-country-geek-gold text-4xl border-b p-2">Shop</h2>
				<p class="text-2xl p-2">
					Check out the shop to see what we have to offer! <br />Everything from laptops to
					individual computer parts, phones, tvs, and more.
				</p>
				<a
					href="/"
					class="text-2xl p-2 bg-country-geek-dark-purple rounded m-auto shadow shadow-black"
					>Coming Soon!</a
				>
			</div>
			<div class="bg-country-geek-blue rounded-lg p-4 flex flex-col min-h-[250px]">
				<h2 class="text-country-geek-gold text-4xl border-b p-2">Business</h2>
				<p class="text-2xl p-2">
					Have a small buisness? See what is available to you, tech setup and install to consulting
					what you might need.
				</p>
				<a
					href="/"
					class="text-2xl p-2 bg-country-geek-dark-purple rounded m-auto shadow shadow-black"
					>Coming Soon!</a
				>
			</div>
			<div class="bg-country-geek-blue rounded-lg p-4 flex flex-col min-h-[250px]">
				<h2 class="text-country-geek-gold text-4xl border-b p-2">Farms & Wineries</h2>
				<p class="text-2xl p-2">Technology for farm and winery automation of help.</p>
				<a
					href="/"
					class="text-2xl p-2 bg-country-geek-dark-purple rounded m-auto shadow shadow-black"
					>Coming Soon!</a
				>
			</div>
		</div>
	</div>

	<div class="w-full pt-12 mt-24 ">
		<h2 class="text-2xl ml-[11%]">Popular Services</h2>
		<div
			class="flex items-center justify-evenly w-full bg-gradient-to-b from-transparent via-country-geek-blue/80 to-country-geek-blue p-5 flex-1"
		>
			<div class="w-[150px] h-[150px] bg-white/40 rounded">
				<img src={repair_icon} alt="" />
			</div>
			<div class="w-[150px] h-[150px] bg-white/40 rounded">
				<img src={mail_icon} alt="" />
			</div>

			<div class="w-[150px] h-[150px] bg-white/40 rounded">
				<img src={printer_icon} alt="" />
			</div>
			<div class="w-[150px] h-[150px] bg-white/40 rounded">
				<img src={internet_icon} alt="" />
			</div>
			<div class="w-[150px] h-[150px] bg-white/40 rounded">
				<img src={setup_icon} alt="" />
			</div>
		</div>
	</div>
</section>

<!-- <div class="relative flex text-white h-screen overflow-auto items-center">
	<div class="relative h-3/4 w-full flex flex-co">
		<div class="flex flex-col gap-2 p-2 h-full ml-20">
			<p class="text-4xl">
				<span class="text-country-geek-gold ">Country Geek</span> providing tech services to <br /> people,
				buiness's, farms & wineries in the south west.
			</p>
			<a href="/booking" class="text-xl bg-country-geek-dark-purple w-fit p-3 rounded-full"
				>Book Now!</a
			>
		</div>
		<div
			class="flex flex-col w-full bg-gradient-to-b from-transparent via-country-geek-blue to-country-geek-blue self-end p-5"
		>
			<h2>Popular Services</h2>
			<div class="w-[150px] h-[150px]" />
		</div>
	</div>
</div> -->
