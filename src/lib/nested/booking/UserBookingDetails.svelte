<script lang="ts">
	const states: string[] = ['WA', 'NSW', 'SA', 'QLD', 'VIC', 'ACT', 'NT', 'TAS'];
</script>

<div
	class="flex flex-col box-border w-3/5 border-2 border-country-geek-test-purple m-auto mt-6 rounded-lg text-white pb-4 pt-4"
>
	<div class="grid grid-cols-2 text-xl gap-4 p-4 w-full m-auto ">
		<div class="flex flex-col w-4/5 m-auto">
			<label for="firstname">Firstname</label>
			<input
				type="text"
				name=""
				id="firstname"
				placeholder="Max"
				class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue "
			/>
		</div>
		<div class="flex flex-col w-4/5 m-auto">
			<label for="">Lastname</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Smith"
				class="bg-neutral-900 p-2 border border-white rounded-md outline-none focus:border-country-geek-light-blue caret-country-geek-light-blue"
			/>
		</div>
		<div class="flex flex-col w-4/5 m-auto">
			<label for="">Phone Number</label>
			<input
				type="tel"
				name=""
				id=""
				class="bg-neutral-900 p-2 border border-white rounded-md outline-none focus:border-country-geek-light-blue caret-country-geek-light-blue"
			/>
		</div>
		<div class="flex flex-col w-4/5 m-auto">
			<label for="">Email</label>
			<input
				type="email"
				name=""
				id=""
				class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue"
			/>
		</div>
	</div>
	<!--Address-->
	<div
		class="flex flex-col box-border border-t-2 border-country-geek-test-purple rounded-md mt-4 p-4 text-xl"
	>
		<div class="flex gap-4 items-center justify-center">
			<div class="flex flex-col">
				<label for="">Street Number</label>
				<input
					type="number"
					name=""
					id=""
					class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue "
				/>
			</div>
			<div class="flex flex-col">
				<label for="">Street Name</label>
				<input
					type="text"
					class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue "
				/>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="flex flex-col">
				<label for="">Suburb</label>
				<input
					type="text"
					name=""
					id=""
					class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue "
				/>
			</div>
			<div class="flex flex-col w-1/5">
				<label for="">Postcode</label>
				<input
					type="number"
					class="bg-neutral-900 p-2 border border-white rounded-md outline-none  focus:border-country-geek-light-blue caret-country-geek-light-blue "
				/>
			</div>
			<div class="flex flex-col w-1/5">
				<label for="">State</label>
				<section class="bg-neutral-900">
					{#each states as state}
						<option value={state}>{state}</option>
					{/each}
				</section>
			</div>
		</div>
	</div>
</div>
