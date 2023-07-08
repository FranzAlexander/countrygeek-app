<script lang="ts">
	import type {
		AddSupplierInfo,
		AddSupplierInfoLoc,
		Supplier,
		SupplierLocation
	} from '$lib/interfaces/admin';
	import Dropdown from './Dropdown.svelte';
	import NumberInput from './NumberInput.svelte';
	import TextInput from './TextInput.svelte';

	export let suppliers: Supplier[];

	let currentSuppliers: AddSupplierInfo[] = [
		{
			supplierId: suppliers[4].id,
			supplierLocations: suppliers[4].locations.map((location) => {
				return {
					locationId: location.id,
					state: location.state,
					amount: 0
				};
			})
		}
	];

	function selectSupplier(event: CustomEvent) {
		const { dropValue } = event.detail;

		const newLocations = suppliers[dropValue - 1].locations.map((location) => {
			return {
				locationId: location.id,
				state: location.state,
				amount: 0
			};
		});

		currentSuppliers[currentSuppliers.length - 1] = {
			supplierId: currentSuppliers[currentSuppliers.length - 1].supplierId,
			supplierLocations: [...newLocations]
		};
	}

	function addSupplier() {
		currentSuppliers = [
			...currentSuppliers,
			{
				supplierId: 0,
				supplierLocations: suppliers[0].locations.map((location) => {
					return {
						locationId: location.id,
						state: location.state,
						amount: 0
					};
				})
			}
		];
	}

	export let productCode: string;
</script>

<div
	class="aspect-w-1 aspect-h-1 overflow-auto rounded-lg bg-white shadow-md dark:border dark:border-gray-700 dark:bg-gray-800"
>
	<div class="p-6 sm:p-8">
		<h1 class="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
			Product Suppliers
		</h1>
		<div class="mt-6 max-h-[500px] space-y-6 divide-y divide-emerald-800 overflow-auto">
			{#each currentSuppliers as supplier, i (supplier.supplierId)}
				<div class="mt-6">
					<Dropdown
						name={`supplier-${i}`}
						label={'Supplier'}
						values={suppliers}
						on:selectDrop={selectSupplier}
					/>
					<TextInput
						name={`supplier-code-${i}`}
						label={'Product Code'}
						placeholder={''}
						value={productCode}
					/>
					<NumberInput
						name={`supplier-price-${i}`}
						label={'Purchase Price'}
						placeholder={''}
						value={0}
					/>
					<div class="mt-4 space-y-4">
						{#each supplier.supplierLocations as loc, ii (loc.locationId)}
							<div>
								<label
									for={`supplier-${i}-loc-${ii}`}
									class="block text-sm font-medium text-gray-900 dark:text-white">Location</label
								>

								<p
									class="block w-full rounded-md border px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
								>
									{loc.state}
								</p>
								<input
									type="text"
									name={`supplier-${i}-loc-${ii}`}
									class="hidden"
									value={loc.locationId}
									readonly
								/>
							</div>
							<div>
								<label
									for={`supplier-${i}-amount-${ii}`}
									class="block text-sm font-medium text-gray-900 dark:text-white">Amount</label
								>
								<input
									type="text"
									name={`supplier-${i}-amount-${ii}`}
									class="block w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
									value={loc.amount}
								/>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<button
			type="button"
			class="mt-6 block w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			on:click={addSupplier}
		>
			Add +
		</button>
	</div>
</div>
