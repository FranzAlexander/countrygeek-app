import type { AddCartItem, CartItem } from '$lib/interfaces/cart';
import { error } from '@sveltejs/kit';

export async function GET({ locals: { supabase, getSession } }) {
	const sessionId = await getSession();

	const { data, error: cartError } = await supabase.rpc('get_cart_items', {
		_cart_id: sessionId?.user.id
	});

	if (cartError) {
		throw error(400, cartError);
	}

	const allItems = data as Array<{
		item_id: number;
		product_name: string;
		thumbnail: string;
		quantity: number;
		price: number;
	}>;

	const cartItems: CartItem[] = allItems.map((item) => ({
		itemId: item.item_id,
		imageUrl: item.thumbnail,
		productName: item.product_name,
		unitPrice: item.price,
		quantity: item.quantity
	}));

	console.log('HI' + cartItems);

	return new Response(JSON.stringify(cartItems, null, 2), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function POST({ request, locals: { supabase, getSession } }) {
	const sessionId = await getSession();
	const { productId, quantity }: AddCartItem = await request.json();

	const { data, error: cartAddError } = await supabase
		.rpc('add_to_cart', {
			_profile_id: sessionId?.user.id,
			_product_id: productId,
			_quantity: quantity
		})
		.single();

	if (cartAddError) {
		throw error(400, cartAddError);
	}

	const newItem = data as {
		item_id: number;
		name: string;
		thumbnail: string;
		quantity: number;
		price: number;
	};

	const cartItem: CartItem = {
		itemId: newItem.item_id,
		imageUrl: newItem.thumbnail,
		productName: newItem.name,
		unitPrice: newItem.price,
		quantity: newItem.quantity
	};

	console.log(cartItem);

	return new Response(JSON.stringify(cartItem, null, 2), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function DELETE({ request, locals: { supabase, getSession } }) {
	const sessionId = await getSession();
	const { itemId }: { itemId: number } = await request.json();

	const { error: cartRemoveError } = await supabase.rpc('remove_cart_item', {
		_cart_id: sessionId?.user.id,
		_item_id: itemId
	});

	if (cartRemoveError) {
		throw error(400, cartRemoveError);
	}

	return new Response(null, { status: 204 });
}

export async function PUT({ request, locals: { supabase, getSession } }) {
	const sessionId = await getSession();
	const { itemId, quantity }: { itemId: number; quantity: number } = await request.json();

	const { error: cartUpdateError } = await supabase.rpc('update_cart_item_quantity', {
		_cart_id: sessionId?.user.id,
		_item_id: itemId,
		_quantity: quantity
	});

	if (cartUpdateError) {
		throw error(400, cartUpdateError);
	}

	return new Response(null, { status: 204 });
}
