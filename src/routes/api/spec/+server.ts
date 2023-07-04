import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { SpecFilter } from '$lib/interfaces/spec';

export const POST = (async ({ request, locals: { supabase } }) => {
	const { subCategoryId } = await request.json();

	const { data: specData } = await supabase.rpc('get_product_filters_by_subcategory', {
		sub_category_id_in: subCategoryId
	});

	if (!specData) {
		throw error(400, 'Failed to get spec filters!');
	}

	const specFilters: SpecFilter[] = specData?.map(
		(spec: { spec_name: string; spec_value: string; count: number }) => ({
			specName: spec.spec_name,
			specOption: [
				{
					specValue: spec.spec_value,
					specCount: spec.count
				}
			]
		})
	);
	return new Response(JSON.stringify(specFilters));
}) satisfies RequestHandler;
