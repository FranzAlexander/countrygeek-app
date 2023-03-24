// export interface User {
// 	first_name: string;
// 	last_name: string;
// 	email: string;
// 	phone_number: number;
// 	address: UserAddress;
// }

export interface User {
	firstname: string;
	role: string;
}

export interface UserAddress {
	street_number: number;
	street_name: string;
	suburb: string;
	postcode: number;
	state: string;
}

export interface UserSignIn {
	email: string;
	password: string;
}

export interface AuthBody {
	access_token: string;
	token_type: string;
}

export interface UserLoginResponse {
	first_name: string;
	role: string;
	auth_body: AuthBody;
}

export interface UserSession {
	first_name: string;
	role: string;
}

export interface UserSignUp {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	password_confirm: string;
}

export interface NewUser {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	date_created: string;
	date_updated: string;
	role: string;
}

export interface ProfileDetails {
	personalDetails: PersonalDetails;
}

export interface PersonalDetails {
	firstname: string;
	lastname: string;
	email: string;
}
