import type { PageLoad } from './booking/$types';
import { user_session } from '$lib/stores';
import { get } from 'svelte/store';

export const load: PageLoad = async () => {
	return {
		name: get(user_session).first_name
	};
};
