<script lang="ts">
	import type { PageData } from './$types';
	import background from '$lib/images/homebackground.jpg';

	import internet_icon from '$lib/icons/pop_services/internet.svg';
	import mail_icon from '$lib/icons/pop_services/Mail.svg';
	import printer_icon from '$lib/icons/pop_services/Printer.svg';
	import repair_icon from '$lib/icons/pop_services/RepairTools.svg';
	import setup_icon from '$lib/icons/pop_services/setup.svg';
	import Nav from '$lib/nested/Nav.svelte';
	import '../app.css';
	import HomepageServices from '$lib/nested/services/HomepageServices.svelte';
	import ReviewBar from '$lib/nested/ReviewBar.svelte';

	function scrollIntoView(target: string) {
		const element = document.getElementById(target);
		if (!element) return;
		element.scrollIntoView({ behavior: 'smooth' });
	}

	const popular_services: string[] = ['Repair', 'Email', 'Printer', 'Internet', 'Setup'];
</script>

<section
	class="relative w-full text-white min-h-[600px]"
	style="background-image: url({background});"
>
	<div class="ml-[6%] pt-10 p-5">
		<div>
			<h1 class="text-6xl pt-10 pb-10 p-2">
				Providing Tech services to the <span class="text-country-geek-gold">SOUTH WEST!</span>
			</h1>
			<p class="text-4xl w-2/4 bg-black/30 rounded p-2">
				Have any technology problems at home, need something new, own a businesses and need some
				technology or even if you own a farm or winery. We have you covered, best part of it all, we
				come to you!
			</p>
		</div>
	</div>
	<div class="mt-24 h-64 bg-gradient-to-b from-transparent to-country-geek-blue " />
</section>
<!-- <ReviewBar /> -->
<HomepageServices />
<!-- <section class="bg-country-geek-blue flex text-white">
		<div class="">
			<h2 class="text-4xl">Our most Popular Services</h2>
			<div class="flex justify-evenly p-4">
				<div class="flex flex-col items-center bg-white/20 rounded w-[10%]">
					<h3 class="text-xl bg-country-geek-blue/50 w-full text-center">Repairs</h3>
					<img
						src={repair_icon}
						alt="Country Geek Repair Service"
						class="object-fit flex-shrink-0"
					/>
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
		<div class="p-4 mr-5">
			<h2 class="text-4xl">Services</h2>
			<a
				href="/services"
				class="border-4 border-country-geek-light-purple rounded-full p-4 text-2xl">More</a
			>
			<a href="/booking">Book Now!</a>
		</div>
	</section> -->
<!-- <div class="relative flex text-white h-screen overflow-auto items-center">
		<div class="relative h-3/4 w-full flex flex-co">
			<div class="flex flex-col gap-2 p-2 h-full ml-20">
				<p class="text-4xl">
					<span class="text-country-geek-gold ">Country Geek</span> providing tech services to
					<br /> people, buiness's, farms & wineries in the south west.
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
