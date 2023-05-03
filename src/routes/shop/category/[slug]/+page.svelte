<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    const products = data.displayItems!;
</script>

<section class="flex justify-evenly bg-secondary py-2">
    {#each products as product}
        
	<div class="w-full max-w-sm rounded-lg border border-gray-300 bg-secondary shadow">
		<a href="#">
			<img src="{product.image}" alt="product" class="p-8 rounded-t-lg"/>
		</a>
        <div class="px-5 pb-5 ">
            <a href="#" class="">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
            </a>  
            <div class="flex items-center justify-between mt-5">
                <span class="text-3xl font-bold text-gray-900">${product.unit_amount }</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See More</a>
            </div>
        </div>
      
	</div>
    {/each}

</section>
