import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';
import type { Database } from './supabase';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	// // try to get session from supabase
	// let session = await event.locals.getSession();

	// if (!session) {
	// 	// no session from supabase, try to get from cookies
	// 	const accessToken = event.cookies.get('access_token');
	// 	const refreshToken = event.cookies.get('refresh_token');

	// 	if (accessToken && refreshToken) {
	// 		// set the session in supabase
	// 		await event.locals.supabase.auth.setSession({
	// 			access_token: accessToken,
	// 			refresh_token: refreshToken
	// 		});
	// 	} else {
	// 		const { data, error } = await event.locals.supabase.auth.signUp({
	// 			email: `guest_${Date.now()}@guest.com`,
	// 			password: `guest_${Math.random().toString(36).slice(-8)}`
	// 		});

	// 		if (error) {
	// 			console.error('Error creating guest user', error);
	// 		} else {
	// 			session = data.session;

	// 			event.cookies.set('access_token', session?.access_token as string, {
	// 				maxAge: 60 * 60 * 24 * 30,
	// 				httpOnly: true,
	// 				secure: true,
	// 				sameSite: true
	// 			});
	// 			event.cookies.set('refresh_token', session?.refresh_token as string, {
	// 				maxAge: 60 * 60 * 24 * 30,
	// 				httpOnly: true,
	// 				secure: true,
	// 				sameSite: true
	// 			});
	// 		}
	// 	}
	// }

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
