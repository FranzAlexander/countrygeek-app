import type { shopCategories } from '$lib/interfaces/shop';
import type { LayoutServerLoad } from '../$types';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const supabaseAdmin = createClient<Database>(
		PUBLIC_SUPABASE_URL,
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk'
	);

	const { data } = await supabaseAdmin.from('shop_categories').select('*');

	let categories: shopCategories[] = [];
	if (data) {
		categories = data;
	}

	return { categories: categories };
};
