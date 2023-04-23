import type { Services } from '$lib/interfaces/service';
import type { User } from '$lib/interfaces/user';

import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const { data: response } = await supabase
		.from('service_category')
		.select(
			`id, category_name, category_image_url,
			sub_service (
				id,
				sub_service_name,
				service_description
			)`
		)
		.order('list_order')
		.returns<Services[]>();

	return { session, response };
}) satisfies PageServerLoad;
