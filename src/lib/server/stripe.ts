import { PRIVATE_STRIPE_KEY } from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(PRIVATE_STRIPE_KEY, { apiVersion: '2022-11-15' });
export default stripe;
