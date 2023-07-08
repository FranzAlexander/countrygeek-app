import { writable, type Writable } from 'svelte/store';

export function useStorage<Value>(key: string, initialValue: Value): Writable<Value> {
	// Check if we're in the browser
	const isBrowser = typeof window !== 'undefined';

	// Only try to get the item from localStorage if we're in the browser
	const storedValue = isBrowser ? localStorage.getItem(key) : null;

	// Parse the stored value if it exists, otherwise use the initial value
	const parsedValue: Value = storedValue ? JSON.parse(storedValue) : initialValue;

	const store = writable<Value>(parsedValue);

	store.subscribe((value) => {
		if (isBrowser) {
			// Only try to set the item in localStorage if we're in the browser
			localStorage.setItem(key, JSON.stringify(value));
		}
	});

	return store;
}
