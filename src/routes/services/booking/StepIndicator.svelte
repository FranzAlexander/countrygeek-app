<script lang="ts">
	export let currentStep: number;
</script>

<ol class="mb-4 flex w-full items-center sm:mb-5">
	<li
		class="flex w-full items-center text-accent after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[''] {currentStep >
		1
			? 'after:border-accent'
			: 'after:border-gray-500'}"
	>
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent lg:h-12 lg:w-12"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 96 960 960"
				width="48"
				class="h-5 w-5 fill-secondary lg:h-10 lg:w-10"
				><path
					d="M479.982 776q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453 623h60V370h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
				/></svg
			>
		</div>
	</li>
	<li
		class="flex w-full items-center text-accent after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[''] {currentStep >=
		3
			? 'after:border-accent'
			: 'after:border-gray-500'}"
	>
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 {currentStep >=
			2
				? 'bg-accent'
				: 'bg-gray-500'}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 96 960 960"
				width="48"
				class="h-5 w-5 fill-secondary lg:h-10 lg:w-10"
				><path
					d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z"
				/></svg
			>
		</div>
	</li>
	<li
		class="flex w-full items-center text-accent after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[''] {currentStep >=
		4
			? 'after:border-accent'
			: 'after:border-gray-500'}"
	>
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 {currentStep >=
			3
				? 'bg-accent'
				: 'bg-gray-500'}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 96 960 960"
				width="48"
				class="h-5 w-5 fill-secondary lg:h-10 lg:w-10"
				><path
					d="M480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976ZM370 616h60V496h100v120h60V431l-110-73-110 73v185Zm110-112Z"
				/></svg
			>
		</div>
	</li>
	<li class="flex items-center text-accent">
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 {currentStep ===
			4
				? 'bg-accent'
				: 'bg-gray-500'}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 96 960 960"
				width="48"
				class="h-5 w-5 fill-secondary lg:h-10 lg:w-10"
				><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg
			>
		</div>
	</li>
</ol>
<!-- <ol
	class="flex w-full text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base"
>
	<li
		class="after:border-1 flex items-center text-blue-600 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-500 sm:after:inline-block sm:after:content-[''] md:w-full"
	>
		<span
			class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
		>
			<svg
				aria-hidden="true"
				class="mr-2 h-4 w-4 sm:h-5 sm:w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/></svg
			>
			Problem <span class="hidden sm:ml-2 sm:inline-flex">Info</span>
		</span>
	</li>
	<li
		class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 sm:after:inline-block md:w-full {currentStep >=
		2
			? 'text-accent'
			: ''}"
	>
		<span
			class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
		>
			<span class="mr-2">2</span>
			Personal <span class="hidden sm:ml-2 sm:inline-flex">Info</span>
		</span>
	</li>
	<li
		class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 sm:after:inline-block md:w-full {currentStep >=
		3
			? 'text-accent'
			: ''}"
	>
		<span
			class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
		>
			<span class="mr-2">3</span>
			Address <span class="hidden sm:ml-2 sm:inline-flex">Info</span>
		</span>
	</li>
	<li class="flex items-center">
		<span class="mr-2">4</span>
		Confirm
	</li>
</ol> -->
