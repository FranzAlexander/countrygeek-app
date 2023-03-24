<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	if (data.personalDetails) {
		console.log(data.personalDetails);
	}
	let groupDisabled: boolean[] = [true, true];

	function makeEditable(index: number) {
		groupDisabled[index] = false;
	}
</script>

<section class="flex bg-neutral-800 text-white">
	<div class="flex w-full bg-gradient-to-bl from-country-geek-light-purple/20 to-cyan-500/20">
		<div class="w-1/6 bg-neutral-900 p-2 rounded-r-lg">
			<ul>
				<li>Details</li>
			</ul>
		</div>
		<div class="w-2/3 flex gap-10 justify-center items-center">
			<div class="bg-neutral-900 border-2 border-cyan-600 p-2 rounded-xl w-1/3 h-full">
				<div class="flex justify-between">
					<h2 class="text-3xl">Personal Details</h2>
					<button
						on:click={() => {
							makeEditable(0);
						}}>Edit</button
					>
				</div>
				<form action="" class="">
					<div class="flex flex-col">
						<label for="">Firstname</label>
						<input
							type="text"
							disabled={groupDisabled[0]}
							value={'s'}
							class="disabled:bg-transparent text-xl"
						/>
					</div>
					<div class="flex flex-col">
						<label for="">Lastname</label>
						<input
							type="text"
							disabled={groupDisabled[0]}
							class="disabled:bg-transparent text-xl"
						/>
					</div>
					<div class="flex flex-col">
						<label for="Email">Email</label>
						<input
							type="email"
							name="Email"
							id=""
							disabled={groupDisabled[0]}
							class="disabled:bg-transparent text-xl"
						/>
					</div>
				</form>
			</div>

			<div class="bg-neutral-900 border-2 border-cyan-600 p-2 rounded-xl w-1/3">
				<h2 class="text-4xl">Address Details</h2>

				<form action="" class="">
					<div class="flex flex-col">
						<label for="">Street Address</label>
						<input type="text" />
					</div>
					<div class="flex flex-col">
						<label for="">City</label>
						<input type="text" />
					</div>
					<div class="flex flex-col">
						<label for="country">Country</label>
						<input type="text" name="country" id="" />
					</div>
					<div class="flex flex-col">
						<label for="postcode">Postcode</label>
						<input type="text" />
					</div>
					<div class="flex flex-col">
						<label for="">State</label>
						<input type="text" />
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	label {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	input {
		padding: 0.25rem;
		background-color: #404040;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: rgb(255 255 255 / 0.2);
	}
</style>
