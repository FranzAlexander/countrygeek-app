<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let quantityValue: number;

	const dispatch = createEventDispatcher();

	function incrementQuantity() {
		dispatch('increaseQuantity');
	}

	function decrementQuantity() {
		dispatch('decreaseQuantity');
	}

	function changeQuantity() {
		dispatch('changeQuantity');
	}
</script>
