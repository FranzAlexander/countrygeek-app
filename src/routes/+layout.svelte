<script>
	import UserAccountStatus from '$lib/nested/header/UserAccountStatus.svelte';
	import logo from '$lib/images/countrygeeklogo.png';
	import '../app.css';
</script>

<!-- <header class="relative h-32 ">
	<a href="/" class="w-1/6 inline-block">
		<img src={logo} alt="logo" class="" />
	</a>
	<UserAccountStatus />
</header> -->

<nav
	class="flex p-4 md:p-6 border-b-2 border-white/10 text-white justify-between m-auto max-w-screen-2xl"
>
	<a href="/" class="w-24 h-24"> <img src={logo} alt="Country Geek Logo" class="object-fit " /></a>
	<ul class="flex justify-center items-center">
		<li class="ml-2">
			<a href="/login" class="text-xl"> Log in</a>
		</li>
		<li class="ml-2 mr-6">
			<a href="/register" class="text-xl">Sign up</a>
		</li>
	</ul>
</nav>
<slot />
<footer />

<style lang="postcss">
	/* header {
		display: inline-block;
		min-height: 10vh; 
		 background-color: #0c1d36;
		color: white;
		box-shadow: rgba(12, 29, 54, 0.25) 0px 14px 28px, rgba(12, 29, 54, 0.22) 0px 10px 10px;
		box-shadow: rgba(47, 27, 99, 1) 0px 14px 28px;
	} */

	/* header img {
		width: 8%;
	} */

	:global(body) {
		margin: 0;
		/* background-color: white; */
		/* background-color: #003153; */
		background-color: #0c1d36;
	}

	footer {
		position: absolute;
		bottom: 0px;
		min-height: 10vh;
		background-color: #0c1d36;
		color: white;
		box-shadow: rgba(12, 29, 54, 0.25) 0px 14px 28px, rgba(12, 29, 54, 0.22) 0px 10px 10px;
	}
</style>
