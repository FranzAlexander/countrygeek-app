<h2 class="text-center text-white text-6xl p-4 mt-4">Booking</h2>
<div class="w-3/4 bg-white/10 rounded-lg m-auto mt-4 p-4">
	<ol class="flex items-center w-3/4 p-2 m-auto border-white/10 border-2 rounded-lg z-10">
		<li
			class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-700 after:border-4 after:inline-block"
		>
			<span class="flex items-center justify-center bg-purple-700 w-8 h-8 rounded-full shrink-0" />
		</li>
		<li
			class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-700 after:border-4 after:inline-block"
		>
			<span class="flex items-center justify-center bg-purple-700 w-8 h-8 rounded-full shrink-0" />
		</li>
		<li class="flex items-center justify-center">
			<span class="flex items-center justify-center bg-purple-700 w-8 h-8 rounded-full shrink-0" />
		</li>
	</ol>

	<form action="">
		<ul class="flex justify-evenly p-2 gap-2 text-white mt-8">
			<li class="w-1/4 h-96">
				<input
					type="radio"
					name="service_type"
					id="repair-selection"
					class="hidden rounded-none peer"
				/>
				<label
					for="repair-selection"
					class="h-full block round-md relative border-2 border-white/5 rounded hover:border-white/10 cursor-pointer peer-checked:border-test-blue  text-center"
				>
					<span class="text-4xl ">Repair</span>
				</label>
			</li>
			<li class="w-1/4 h-96">
				<input
					type="radio"
					name="service_type"
					id="email-selection"
					class="hidden rounded-none peer"
				/>
				<label
					for="email-selection"
					class="block h-96 round-md relative border-2 border-white/5 rounded hover:border-white/10 cursor-pointer peer-checked:border-test-blue text-center"
					><span class="text-4xl">Email</span></label
				>
			</li>
			<li class="w-1/4 h-96">
				<input
					type="radio"
					name="service_type"
					id="internet-selection"
					class="hidden rounded-none peer"
				/>
				<label
					for="internet-selection"
					class="block h-96 round-md relative border-2 border-white/5 rounded hover:border-white/10 cursor-pointer peer-checked:border-test-blue text-center"
					><span class="text-4xl">Internet</span></label
				>
			</li>
		</ul>
	</form>
</div>
