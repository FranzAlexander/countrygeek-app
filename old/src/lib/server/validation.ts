export const validatePersonalDetails = async (
	fullname: string,
	email: string,
	phone: string,
	errors: Record<string, unknown>
) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const phoneRegex = /^[0-9]{10}$/;

	let stepError = 0;

	if (fullname === '') {
		errors.fullname = 'This field is required!';
		stepError = 2;
	}
	if (email === '') {
		errors.email = 'This field is required!';
		stepError = 2;
	}
	if (phone === '') {
		errors.phone = 'This field is required!';
		stepError = 2;
	}

	if (!emailRegex.test(email) && errors.email === '') {
		errors.email = 'Please enter a vaild email!';
		stepError = 2;
	}

	if (!phoneRegex.test(phone) && errors.phone === '') {
		errors.phone = 'Please enter a vaild phone number!';
		stepError = 2;
	}
	return stepError;
};

export const validateAddressDetails = async (
	streetAddress: string,
	postcode: string,
	suburb: string,
	errors: Record<string, unknown>
) => {
	let stepError = 0;

	if (streetAddress === '') {
		errors.streetAddress = 'This field is required!';
		stepError = 3;
	}
	if (postcode === '') {
		errors.postcode = 'This field is required!';
		stepError = 3;
	}
	if (suburb === '') {
		errors.suburb = 'This field is required!';
		stepError = 3;
	}

	return stepError;
};
