<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserLogin } from '$lib/interfaces/user';
	import { redirect } from '@sveltejs/kit';
	let emailError: boolean = false;
	let errorMsg: string = '';
</script>

<section class="login-form">
	<h2>Login</h2>
	<form use:enhance method="POST">
		<fieldset>
			<h3>Email</h3>
			<input name="email" type="email" required placeholder="Enter email here" />
			<i class="fa fa-envelope" />
		</fieldset>
		<fieldset>
			<h3>Password</h3>
			<input name="password" type="password" required placeholder="Enter password here" />
		</fieldset>
		<button type="submit">Login</button>
	</form>
</section>

<style>
	.login-form {
		color: white;
		/* background-color: #0c1d36; */
		background: rgb(144, 20, 221);
		background: linear-gradient(
			343deg,
			rgba(144, 20, 221, 1) 8%,
			rgba(79, 26, 140, 1) 27%,
			rgba(12, 29, 54, 1) 48%
		);
		width: 25vw;
		height: 50vh;
		margin: auto;
		margin-top: 10vh;
		border-radius: 2.5%;
		box-shadow: rgba(12, 29, 54, 0.25) 0px 14px 28px, rgba(12, 29, 54, 0.22) 0px 10px 10px;
		text-align: center;
	}

	.login-form h2 {
		font-size: 3.5em;
		text-transform: uppercase;
	}

	.login-form input {
		padding: 10px;
		margin: 10px 0;
		outline: none;
		/* color: white; */
	}

	.login-form button {
		padding: 10px;
		margin: 10% 0;
		background-color: #003153;
		color: white;
		width: 6vw;
		border-radius: 10px;
	}

	.login-form fieldset {
		border: none;
	}

	/* .login-form div {
	
	} */
</style>
