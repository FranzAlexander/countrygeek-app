import type { AddCartItem, CartItem } from '$lib/interfaces/cart';
import { error } from '@sveltejs/kit';

export async function GET({ locals: { supabase, getSession } }) {
	const session = await getSession();

	const { data: cart, error: cartError } = await supabase
		.from('cart_item')
		.select('product_id, quantity')
		.eq('cart_id', session?.user.id);

	if (cartError) {
		throw error(400, cartError);
	}

	// const { data: cartItems } = await supabase
	// 	.from('product')
	// 	.select('thumbnail, name, price')
	// 	.eq('id', cart.product_id);

	return new Response();
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

	const newCartItem = data as CartItem;
	const cartItem: CartItem = {
		imageUrl: newCartItem.imageUrl,
		productName: newCartItem.productName,
		unitPrice: newCartItem.unitPrice,
		quantity: newCartItem.quantity
	};

	return new Response(JSON.stringify(cartItem, null, 2), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
