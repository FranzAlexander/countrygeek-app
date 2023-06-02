<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<main
	class="flex h-full w-full flex-col gap-20 bg-fixed pb-20"
	style="background-image: url('https://imagedelivery.net/cXH-XdNE8neFJ-7qoa3CXA/108164fc-2bf7-4fef-72e3-4d8832e6bc00/public'); background-repeat:no-repeat; "
>
	<Hero />

	<section id="contact-us" class="bg-gray-100">
		<div class="container mx-auto px-6 py-12">
			<div>
				<p class="font-medium text-blue-800">Contact Us</p>
				<p class="mt-3 text-gray-500 dark:text-gray-400">
					We’d love to hear from you. Please fill out this form or shoot us an email.
				</p>
			</div>
			<div class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
				<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
					<div>
						<span
							class="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</span>

						<h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							Get in contact with us through email.
						</p>
						<p class="mt-2 text-sm text-blue-500 dark:text-blue-400">alex@countrygeek.au</p>
					</div>
					<div>
						<span
							class="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</span>

						<h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 9:30am to 4pm.</p>
						<p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
					</div>
					<div>
						<span
							class="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</span>

						<h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Tue-Thur 9:30amish to 4pm</p>
						<p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
							4 Steere Street Bridgetown WA 6255 AU
						</p>
					</div>
					<div>
						<span
							class="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800"
						>
							<div class="h-96 overflow-hidden rounded-lg lg:col-span-2 lg:h-auto">
								<iframe
									width="100%"
									height="100%"
									frameborder="0"
									title="map"
									marginheight="0"
									marginwidth="0"
									scrolling="no"
									src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
								/>
							</div>
						</span>
					</div>
				</div>
				<div class="rounded-lg bg-gray-50 p-4 py-6 dark:bg-gray-800 md:p-8">
					<form>
						<div class="-mx-2 md:flex md:items-center">
							<div class="flex-1 px-2">
								<label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">First Name</label
								>
								<input
									type="text"
									placeholder="John "
									class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
								/>
							</div>

							<div class="mt-4 flex-1 px-2 md:mt-0">
								<label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Last Name</label>
								<input
									type="text"
									placeholder="Doe"
									class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
								/>
							</div>
						</div>

						<div class="mt-4">
							<label class="mb-2 block text-sm text-gray-600 dark:text-gray-200"
								>Email address</label
							>
							<input
								type="email"
								placeholder="johndoe@example.com"
								class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
							/>
						</div>

						<div class="mt-4 w-full">
							<label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
							<textarea
								class="mt-2 block h-32 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 md:h-56"
								placeholder="Message"
							/>
						</div>

						<button
							class="mt-4 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>
