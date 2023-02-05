<script lang="ts">
	export let title: string;
	export let link_text: string;
	export let link: string;
	export let desc_points: string[];
</script>

<section
	class="flex flex-col justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-white/10 p-2 "
>
	<h1 class="text-3xl font-roboto">{title}</h1>
	<ul class="list-disc p-2">
		{#each desc_points as item}
			<li class="text-xl p-2">{item}</li>
		{/each}
	</ul>

	<a href={link} class="text-xl border-2 border-metallic-yellow rounded p-2 mt-3">{link_text}</a>
</section>
<!-- 
<style>
	.card-body {
		color: white;
		/* background-color: #f8f6f6; */
		background-color: rgba(255, 255, 255, 0.2);
		width: 25vw;
		height: 55vh;
		border-radius: 25px;
		margin: auto;
		box-shadow: rgba(47, 27, 99, 1) 0px 14px 28px, rgba(47, 27, 99, 1) 0px 10px 10px;
		text-align: center;
		position: relative;
		/* border: 1px solid gold; */
	}

	.card-body h1 {
		font: 2em sans-serif;
	}

	.card-body a {
		/* background-color: rgb(47, 27, 99); */
		color: white;
		text-decoration: none;
		font-size: xx-large;
		border-bottom: 1px solid gold;
	}
</style> -->
