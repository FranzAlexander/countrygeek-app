<script>
	import logo from '$lib/images/countrygeeklogo.png';
	import '../app.css';
</script>

<nav class="flex border-b-2 border-white/10 text-white justify-between m-auto max-w-screen-2xl">
	<a href="/" class="w-16 h-16">
		<img src={logo} alt="Country Geek Logo" class="object-fit " />
	</a>

	<ul class="flex justify-center items-center">
		<li class="p-2">
			<a href="/booking" class="text-xl">Book Online</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-xl">Store</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-xl">Business</a>
		</li>
		<li class="p-2">
			<a href="/" class="text-xl">Farms & Wineries</a>
		</li>
	</ul>

	<ul class="flex justify-center items-center">
		<li
			class="ml-2 border-2 border-metallic-yellow rounded p-2 hover:shadow-md hover:shadow-white/20 hover:bg-white/10"
		>
			<a href="/login" class="text-xl"> Log in</a>
		</li>
		<li
			class="ml-2 mr-6 border-2 border-metallic-yellow rounded p-2 hover:shadow-md hover:shadow-white/20 hover:bg-white/10"
		>
			<a href="/register" class="text-xl">Sign up</a>
		</li>
	</ul>
</nav>
<slot />
<footer class="" />
