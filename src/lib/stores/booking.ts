import { writable, type Writable } from 'svelte/store';

export const selected_booking: Writable<string> = writable('');
