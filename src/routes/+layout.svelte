<script>
	import Footer from '$lib/nested/Footer.svelte';
	import Nav from '$lib/nested/Nav.svelte';
</script>

<!-- <script>
	import logo from '$lib/images/countrygeeklogo.png';
	import '../app.css';

	import background from '$lib/images/homebackground.jpg';
</script>

<div class="flex flex-col" style="background-image: url({background})">
	<nav class="flex text-white  justify-between w-full relative top-0 p-2 box-border z-20">
		<a href="/" class="w-32 h-32 ml-10 mt-10">
			<img src={logo} alt="Country Geek Logo" class="object-fit box-border" /></a
		>

		<ul class="flex justify-center items-center">
			<li class="p-2">
				<a href="/services" class="text-2xl">Services</a>
			</li>
			<li class="p-2"><a href="/" class="text-2xl">Store</a></li>
			<li class="p-2"><a href="/" class="text-2xl">Business</a></li>
			<li class="p-2"><a href="/" class="text-2xl">Farms & Wineries</a></li>
			<li class="p-2"><a href="/signin" class="text-2xl">Sign In</a></li>
			<li class="p-2"><a href="/signup" class="text-2xl">Sign Up</a></li>
		</ul>
	</nav>
	<slot />
</div> -->
<!-- </div>
<nav
	class="flex text-white bg-transparent justify-between w-full sticky top-0 h-18 p-2 box-border z-10 "
>
	<a href="/" class="w-16 h-16 ">
		<img src={logo} alt="Country Geek Logo" class="object-fit box-border" />
	</a>

	<ul class="flex justify-center items-center ">
		<li class="p-2">
			<a href="/booking" class="text-l">Services</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-l">Store</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-l">Business</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-l">Farms & Wineries</a>
		</li>
		<li
			class="ml-2 border-2 border-metallic-yellow rounded p-2 hover:shadow-md hover:shadow-white/20 hover:bg-white/10"
		>
			<a href="/login" class="text-l"> Log in</a>
		</li>
		<li
			class="ml-2 mr-6 border-2 border-metallic-yellow rounded p-2 hover:shadow-md hover:shadow-white/20 hover:bg-white/10"
		>
			<a href="/register" class="text-l">Sign up</a>
		</li>
	</ul>
</nav>
<slot />
<footer class="bg-oxford-blue flex  bottom-0">
	<a href="/" class="w-16 h-16">
		<img src={logo} alt="Country Geek Logo" class="object-fit " />
	</a>
</footer> -->
<div class="flex flex-col">
	<Nav />
	<slot />
	<Footer />
</div>
