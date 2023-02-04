import type { PageServerLoad } from './booking/$types';
import { user_session } from '$lib/stores';
import { get } from 'svelte/store';

export const load: PageServerLoad = async (event) => {
	return {
		name: get(user_session).first_name
	};
};
