<script lang="ts">
	import logo from '$lib/images/countrygeeklogo.png';
</script>

<footer class="relative border-t border-primary-20 bg-primary">
	<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="/" class="flex items-center">
					<img src={logo} alt="Country Geek logo" class="mr-3 h-8" />
					<span class="self-center whitespace-nowrap text-2xl font-semibold text-logo"
						>Country Geek</span
					>
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				<!-- Site Map -->
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-secondary">Site Map</h2>
					<ul class="font-medium text-secondary/70">
						<li class="mb-4">
							<a href="/services" class="hover:underline">Services</a>
						</li>
						<li class="mb-4">
							<span>Shop (coming soon)</span>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-secondary">Follow us</h2>
					<ul class="font-medium text-secondary/70">
						<li class="mb-4">
							<a
								href="https://www.facebook.com/profile.php?id=100088191256907"
								class="hover:underline">Facebook</a
							>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-secondary">Legal</h2>
					<ul class="font-medium text-secondary/70">
						<li class="mb-4">
							<a href="/legal/privacy" class="hover:underline">Privacy Policy</a>
						</li>
						<li class="mb-4">
							<a href="/legal/terms-and-conditions">Terms &amp; Conditions</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
