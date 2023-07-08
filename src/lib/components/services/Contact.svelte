<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../../routes/$types';

	export let form: ActionData;
</script>

<section class="relative bg-gray-50 font-sans text-gray-700">
	<div class="container mx-auto px-5 py-24">
		<div class="mb-8 flex w-full flex-col text-center">
			<h2 class="mb-1 font-heading text-2xl font-medium uppercase tracking-widest text-indigo-500">
				Contact Us
			</h2>

			<h1 class="font-body text-4xl font-medium text-gray-900 sm:text-5xl">
				We'd love to hear from you
			</h1>
		</div>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<div class="mb-6 flex flex-col space-y-5">
					<div class="flex items-center justify-center space-x-2">
						<span class="inline-block rounded-full bg-blue-200 p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</span>
						<span class="text-lg text-gray-700">0434 578 586</span>
					</div>
					<div class="flex items-center justify-center space-x-2">
						<span class="inline-block rounded-full bg-blue-200 p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</span>

						<span class="text-lg text-gray-700">alex@countrygeek.au</span>
					</div>
				</div>
			</div>
			<form method="POST" use:enhance>
				<div class="grid grid-cols-1 gap-6">
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label
								for="name"
								class={form?.errors?.name
									? 'text-lg font-medium text-red-600'
									: 'text-lg font-medium text-gray-700'}>Name</label
							>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={form?.data?.name ?? ''}
								class={form?.errors?.name
									? 'mt-2 w-full rounded-lg border-2 border-red-600 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'
									: 'mt-2 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'}
							/>
							{#if form?.errors?.name}
								<p class="text-red-600">{form?.errors?.name}</p>
							{/if}
						</div>
						<div>
							<label
								for="email"
								class={form?.errors?.email
									? 'text-lg font-medium text-red-600'
									: 'text-lg font-medium text-gray-700'}>Email</label
							>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={form?.data?.email ?? ''}
								class={form?.errors?.email
									? 'mt-2 w-full rounded-lg border-2 border-red-600 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'
									: 'mt-2 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'}
							/>
							{#if form?.errors?.email}
								<p class="text-red-600">{form?.errors?.email}</p>
							{/if}
						</div>
					</div>
					<div>
						<label
							for="subject"
							class={form?.errors?.subject
								? 'text-lg font-medium text-red-600'
								: 'text-lg font-medium text-gray-700'}>Subject</label
						>
						<input
							type="text"
							id="subject"
							name="subject"
							required
							value={form?.data?.subject ?? ''}
							class={form?.errors?.subject
								? 'mt-2 w-full rounded-lg border-2 border-red-600 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'
								: 'mt-2 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'}
						/>
						{#if form?.errors?.subject}
							<p class="text-red-600">{form?.errors?.subject}</p>
						{/if}
					</div>
					<div>
						<label
							for="message"
							class={form?.errors?.message
								? 'text-lg font-medium text-red-600'
								: 'text-lg font-medium text-gray-700'}>Message</label
						>
						<textarea
							id="message"
							name="message"
							required
							value={form?.data?.message ?? ''}
							class={form?.errors?.message
								? 'mt-2 h-32 w-full resize-none rounded-lg border-2 border-red-600 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'
								: 'mt-2 h-32 w-full resize-none rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-lg text-gray-700 focus:border-indigo-500 focus:outline-none'}
						/>
						{#if form?.errors?.message}
							<p class="text-red-600">{form?.errors?.message}</p>
						{/if}
					</div>
					<div>
						<button
							type="submit"
							class="w-full transform rounded-lg bg-[#008080] px-8 py-2 text-lg text-white transition hover:scale-105 focus:outline-none"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
