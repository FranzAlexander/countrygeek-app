async function validateDescription(description: string) {
	if (description === '') {
		return { error: 'Description required', next: false };
	} else {
		return { error: '', next: true };
	}
}

async function validatePersonalDetails(
	fullname: string,
	email: string,
	phone: string,
	errors: Record<string, unknown> | null
) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const phoneRegex = /^[0-9]{10}/;

	let pErrors: Record<string, unknown> = {};
	if (fullname === '') {
		if (!errors) {
			pErrors.fullname = 'This is required!';
		} else {
			errors.fullname = 'This is required!';
		}
	}
	if (email === '') {
		if (!errors) {
			pErrors.email = 'This is required!';
		} else {
			errors.email = 'This is required!';
		}
	}
	if (phone === '') {
		if (!errors) {
			pErrors.phone = 'This is required!';
		} else {
			errors.phone = 'This is required!';
		}
	}

	if (!emailRegex.test(email)) {
		if (!errors) {
			pErrors.email = 'Please enter a vaild email!';
		} else {
			errors.email = 'Please enter a vaild email!';
		}
	}

	if (!phoneRegex.test(phone)) {
		if (!errors) {
			pErrors.phone = 'Please enter a vaild phone number!';
		} else {
			errors.phone = 'Please enter a vaild phone number!';
		}
	}

	if (Object.entries(pErrors).length > 0) {
		return pErrors;
	}
}
