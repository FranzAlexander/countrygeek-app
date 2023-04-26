<script lang="ts">
	let showSideBar = false;
	function toggleSideBar() {
		showSideBar = showSideBar === false ? true : false;
	}
</script>

<div class="flex h-screen flex-wrap overflow-y-auto bg-primary">
	<div>
		<button
			aria-controls="default-sidebar"
			class=" ml-3 mt-2 inline-flex items-center p-2 text-sm text-secondary hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
			type="button"
			on:click={toggleSideBar}
			><span class="sr-only">Open sidebar</span>
			<svg
				class="h-6 w-6 fill-secondary"
				aria-hidden="true"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
				/>
			</svg>
		</button>
		<aside
			class="absolute z-40 h-screen w-64 transition-transform sm:translate-x-0 {showSideBar
				? 'translate-x-0'
				: '-translate-x-full'}"
			aria-label="Sidebar"
		>
			<div
				class="h-full overflow-y-auto rounded-r-lg bg-secondary px-3 py-4 lg:rounded-none lg:bg-secondary/70"
			>
				<div class="mb-5 flex items-center border-b border-gray-600 pb-2.5 pl-2.5 text-gray-900">
					<svg
						aria-hidden="true"
						class="mr-3 h-6 w-6 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
							d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
						/></svg
					>

					<h2 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Your Dashboard
					</h2>
				</div>
				<ul class="space-y-2 font-medium">
					<li>
						<a
							href="/account/profile"
							class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
						>
							<svg
								aria-hidden="true"
								class="h-6 w-6 flex-shrink-0 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clip-rule="evenodd"
								/></svg
							>

							<span class="ml-3"> Profile</span></a
						>
					</li>
				</ul>
			</div>
		</aside>
	</div>
	<slot />
</div>
