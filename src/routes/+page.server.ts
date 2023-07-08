import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

function isValidEmail(email: string): boolean {
	const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	return emailPattern.test(email);
}

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const name = formData.get('name') as string | null;
		const email = formData.get('email') as string | null;
		const subject = formData.get('subject') as string | null;
		const message = formData.get('message') as string | null;

		const errors: Record<string, unknown> = {};

		// Perform basic validation using type guards for more robust error checking
		if (!name || name.trim() === '') {
			errors.name = 'Name is required';
		}

		if (!email || !isValidEmail(email)) {
			errors.email = 'Invalid email address';
		}

		if (!subject || subject.trim() === '') {
			errors.subject = 'Subject is required';
		}

		if (!message || message.trim() === '') {
			errors.message = 'Message is required';
		}

		if (Object.keys(errors).length > 0) {
			const data = { data: Object.fromEntries(formData), errors };

			return fail(400, data);
		}

		const { error: serviceEnquiryErr } = await supabase.from('service_enquiry').insert({
			name: name,
			email: email,
			subject: subject,
			message: message
		});

		if (serviceEnquiryErr) {
			return fail(400, { error: 'Failed to create enquiry' });
		}

		return { success: true };
	}
};
