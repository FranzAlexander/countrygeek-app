<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="font-heading text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Account Sign in
				</h1>
				<form method="post" use:enhance class="space-y-4 md:space-y-6">
					<div>
						<label
							for="email"
							class="mb-2 block font-sans text-sm font-medium text-gray-900 dark:text-white"
							>Email:</label
						>
						<input
							type="text"
							name="email"
							id="email"
							class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-sans text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
							placeholder="name@countrygeek.au"
							required
						/>
					</div>
					<div>
						<label
							for="password"
							class="mb-2 block font-sans text-sm font-medium text-gray-900 dark:text-white"
							>Password</label
						>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="•••••••••••••"
							class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-sans text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
							required
						/>
					</div>

					<button
						type="submit"
						class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Sign In</button
					>
				</form>
			</div>
		</div>
	</div>
</section>
