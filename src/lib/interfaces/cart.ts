export interface AddCartItem {
	productId: string;
	quantity: number;
}

export interface CartItem {
	imageUrl: string;
	productName: string;
	unitPrice: number;
	quantity: number;
}
