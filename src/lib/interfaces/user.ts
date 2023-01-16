export interface User {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: number;
	address: UserAddress;
}

export interface UserAddress {
	street_number: number;
	street_name: string;
	suburb: string;
	postcode: number;
	state: string;
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface AuthBody {
	access_token: string;
	token_type: string;
}

export interface UserTest {
	first_name: string;
	auth_token: AuthBody;
}
