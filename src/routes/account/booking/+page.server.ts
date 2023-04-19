import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	const { data: booking } = await supabase
		.from('booking')
		.select('*')
		.eq('profile_id', session?.user.id);

	return { session, booking };
}) satisfies PageServerLoad;
