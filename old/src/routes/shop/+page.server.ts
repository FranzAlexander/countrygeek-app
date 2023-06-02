import { createClient } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';
import type { Database } from '../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: products, error } = await supabase.from('products').select('*');
	console.log(products);

	return { products };
};
