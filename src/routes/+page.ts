import type { ServiceOffered } from '$lib/interfaces/service';
import iconDictionary from '$lib/util';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const supabase = (await parent()).supabase;

	const { data, error: serviceError } = await supabase
		.from('service_offered')
		.select('title,description,icon,benefits')
		.order('id', { ascending: true });

	if (serviceError) {
		return { error: "Couldn't get services offered" };
	}

	const services: ServiceOffered[] = await Promise.all(
		data?.map(async (service) => {
			return {
				title: service.title || '',
				description: service.description || '',
				icon: service.icon || '',
				benefits: service.benefits || []
			};
		})
	);

	return { services: services };
}) satisfies PageLoad;
