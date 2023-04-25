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
			<div class="h-full overflow-y-auto bg-secondary/70 px-3 py-4 ">
				<ul class="space-y-2 font-medium">
					<li><a href="/account/profile">Profile</a></li>
				</ul>
			</div>
		</aside>
	</div>
	<slot />
</div>
