<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
</script>

<nav class="flex text-white bg-country-geek-blue w-full justify-between box-border p-2 z-30">
	<a href="/" class="w-32 h-32 ml-10 ">
		<img src={logo} alt="Country Geek Logo" class="object-fill   box-border" /></a
	>

	<ul class="flex justify-center items-center">
		<li class="p-2">
			<a href="/services" class="text-2xl">Services</a>
		</li>
		<li class="p-2"><a href="/" class="text-2xl">Shop</a></li>
		<li class="p-2"><a href="/" class="text-2xl">Business</a></li>
		<li class="p-2"><a href="/" class="text-2xl">Farms & Wineries</a></li>
	</ul>
	<ul class="flex justify-center items-center mr-10   ">
		<li class="p-2"><a href="/account/signin" class="text-2xl">Sign In</a></li>
		<li class="p-2"><a href="/account/signup" class="text-2xl">Sign Up</a></li>
	</ul>
</nav>
