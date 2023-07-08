export interface AddCartItem {
	productId: string;
	quantity: number;
}

export interface CartItem {
	itemId: number;
	imageUrl: string;
	productName: string;
	unitPrice: number;
	quantity: number;
}
