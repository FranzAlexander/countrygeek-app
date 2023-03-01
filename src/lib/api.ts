import { error } from '@sveltejs/kit';
import { text } from 'svelte/internal';

export const backend_api: string = 'http://127.0.0.1:3001';
export const auth_service = 'http://127.0.0.1:3001';
export const booking_service = 'http://127.0.0.1:3000';

export async function get(path: string) {
	let headers: HeadersInit = { 'Content-Type': 'application/json' };

	// if (!!token) {
	// 	headers['Authorization'] = `Bearer ${token}`;
	// }

	const res = await fetch(`${auth_service}/${path}`, {
		method: 'GET',
		headers
	});

	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export async function post(service: string, path: string, data: any, token: string) {
	let headers: HeadersInit = { 'Content-Type': 'application/json' };

	if (!!token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${service}/${path}`, {
		method: 'POST',
		headers,
		body: JSON.stringify(data)
	});

	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}
