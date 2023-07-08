import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const { data } = await supabase
		.from('profile')
		.select('is_admin')
		.eq('id', session?.user.id)
		.single();

	const is_admin = data !== null ? data.is_admin : false;

	if (session && is_admin) {
		throw redirect(303, '/admin/product');
	}
	return { session: getSession() };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		await supabase.auth.signInWithPassword({ email: email, password: password });
		throw redirect(303, '/admin/product');
	}
} satisfies Actions;
