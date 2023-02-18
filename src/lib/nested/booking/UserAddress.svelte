<script lang="ts">
	const states: string[] = ['WA', 'NSW', 'SA', 'QLD', 'VIC', 'ACT', 'NT', 'TAS'];
	let selected_state: string = '';
</script>

<div class="text-white">
	<div class="box-border relative">
		<input
			type="number"
			id="steet-number"
			class="absolute top-0 left-0 box-border bg-neutral-900"
		/>
		<span class="block box-border top-0 text-white">Street Number</span>
	</div>
	<label for=""> Street Number </label>
	<input type="number" class="bg-neutral-900" />
	<label for="">Street Name</label>
	<input type="text" class="bg-neutral-900" />
	<label for="">Suburb</label>
	<input type="text" name="" id="" class="bg-neutral-900" />
	<select class="bg-neutral-900">
		{#each states as state}
			<option value={state}> {state}</option>
		{/each}
	</select>
</div>
