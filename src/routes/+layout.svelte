<script>
	import UserAccountStatus from '$lib/nested/header/UserAccountStatus.svelte';
</script>

<header>
	<UserAccountStatus />
</header>
<slot />

<style>
	header {
		min-height: 10vh;
		background-color: #0c1d36;
		color: white;
		box-shadow: rgba(12, 29, 54, 0.25) 0px 14px 28px, rgba(12, 29, 54, 0.22) 0px 10px 10px;
	}

	:global(body) {
		margin: 0;
		/* background-color: white; */
		background-color: #003153;
	}
</style>
