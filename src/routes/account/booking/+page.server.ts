import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	const { data: response } = await supabase
		.from('booking')
		.select('*')
		.eq('profile_id', session?.user.id);

	console.log(response);
}) satisfies PageServerLoad;
