<script lang="ts">
	export let indicator_step: number = 0;
</script>

<ol class="flex items-center w-3/4 p-2 m-auto border-white/10 border-2 rounded-lg z-10">
	<li
		class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1  after:border-country-geek-purple after:border-2 after:inline-block"
	>
		<span
			class="flex items-center justify-center {indicator_step == 0
				? 'animate-pulse'
				: ''} bg-country-geek-purple w-8 h-8 rounded-full shrink-0"
		/>
	</li>
	<li
		class="flex w-full items-center justify-center after:content-[''] after:w-full after:h-1  after:border-country-geek-purple after:border-2 after:inline-block "
	>
		<span
			class="flex items-center justify-center {indicator_step === 0
				? 'border-2 border-country-geek-purple'
				: 'bg-country-geek-purple animate-pulse'} w-8 h-8 rounded-full shrink-0"
		/>
	</li>
	<li class="flex items-center justify-center">
		<span
			class="flex items-center justify-center border-2 border-country-geek-purple w-8 h-8 rounded-full shrink-0"
		/>
	</li>
</ol>
