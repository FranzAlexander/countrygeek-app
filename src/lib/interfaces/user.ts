// export interface User {
// 	first_name: string;
// 	last_name: string;
// 	email: string;
// 	phone_number: number;
// 	address: UserAddress;
// }

export interface User {
	fullname: string | null;
	phone: string | null;
	userAddress: UserAddress | UserAddress[] | null;
}

export interface UserAddress {
	streetAddress: string | null;
	city: string | null;
	postcode: string | null;
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
	fullname: string;
	email: string;
	password: string;
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
