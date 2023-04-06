import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '../database.types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: 'https://vlyngeiufllhksvmirle.supabase.co',
		supabaseKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MzYyNjYsImV4cCI6MTk5NTIxMjI2Nn0.uSlnx0ZHvUdgIlL1DccuBCGUP02ScEtRdZYVbReulEY',
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
