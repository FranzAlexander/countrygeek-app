import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ url, locals: { supabase } }) => {
	const { error } = await supabase.auth.signOut();

	return json({ type: 'success' });
};
