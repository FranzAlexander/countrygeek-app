import type { CartItem } from '$lib/interfaces/cart';
import { writable, type Writable } from 'svelte/store';

export interface CartStore extends Writable<CartItem[]> {
	addToCart: (cartItem: CartItem) => void;
	increaseQuantity: (itemId: number) => void;
	decreaseQuantity: (itemId: number) => void;
	changeQuantity: (itemId: number, newQuantity: number) => void;
	removeItem: (itemId: number) => void;
}

export function createCartStore(): CartStore {
	const { subscribe, set, update } = writable<CartItem[]>([]);

	const findCartItemIndexByName = (cartItems: CartItem[], productName: string): number => {
		return cartItems.findIndex((item) => item.productName === productName);
	};

	const addToCart = (cartItem: CartItem): void => {
		update((items) => {
			const existingItemIndex = findCartItemIndexByName(items, cartItem.productName);

			if (existingItemIndex !== -1) {
				return items.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + cartItem.quantity }
						: item
				);
			}

			return [...items, cartItem];
		});
	};

	const increaseQuantity = (itemId: number): void => {
		update((items) =>
			items.map((item) =>
				item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decreaseQuantity = (itemId: number): void => {
		update((items) =>
			items.map((item) =>
				item.itemId === itemId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	const changeQuantity = (itemId: number, newQuantity: number): void => {
		update((items) =>
			items.map((item) => (item.itemId === itemId ? { ...item, quantity: newQuantity } : item))
		);
	};

	const removeItem = (itemId: number): void => {
		update((items) => items.filter((item) => item.itemId !== itemId));
	};

	return {
		subscribe,
		set,
		update,
		addToCart,
		increaseQuantity,
		decreaseQuantity,
		changeQuantity,
		removeItem
	};
}
