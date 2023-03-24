<script lang="ts">
	import background from '$lib/images/homebackground.jpg';
	import '../app.css';
	import HomepageServices from '$lib/nested/services/HomepageServices.svelte';

	function scrollIntoView(target: string) {
		const element = document.getElementById(target);
		if (!element) return;
		element.scrollIntoView({ behavior: 'smooth' });
	}
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
	<div class="mt-24 h-64 bg-gradient-to-b from-transparent to-country-geek-blue" />
</section>

<HomepageServices />
