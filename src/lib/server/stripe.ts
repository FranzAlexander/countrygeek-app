import { loadStripe } from '@stripe/stripe-js';

export const stripe = await loadStripe(
	'sk_test_51N13N6Bl6RuBTaaaDXMmsEmBsF5OfOlcfg1xYkc4ndTsisZTLU2fJnzG0EogBR2Q0s7ibftgww3dZqZ6dK4fIo8b00WQ8c20pr'
);
