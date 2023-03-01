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

export interface UserLoginResponse {
	first_name: string;
	session_id: string;
	auth_body: AuthBody;
}

export interface UserSession {
	first_name: string;
	session_id: string;
	token: AuthBody;
}

export interface UserSignUp {
	first_name: string;
	last_name: string;
	email: string;
	email_confirm: string;
	password: string;
	password_confirm: string;
	tnc: string;
}
