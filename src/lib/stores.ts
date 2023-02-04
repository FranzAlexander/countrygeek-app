import { writable } from 'svelte/store';
import type { UserSession, AuthBody } from './interfaces/user';

export const user_session = writable<UserSession>({
	first_name: '',
	session_id: '',
	token: { access_token: '', token_type: '' }
});
