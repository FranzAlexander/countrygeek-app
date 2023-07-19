<script lang="ts">
	import '../app.css';
	import '@fontsource/roboto';
	import '@fontsource/montserrat';
	import '@fontsource/open-sans';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	const websiteData = data.structuredData;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Development Services - Country Geek</title>
	<meta
		name="description"
		content="At Country Geek, we offer a variety of tech services, including Web Development, App Development, Data Logging and Analysis, Tech Consulting for Research, Custom Software Development, Development of Hardware/Software Packages, and Agritech Solutions. Explore our services to find the perfect solution for your business needs."
	/>
	<script type="application/ld+json">
		 {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'Country Geek',
	description:
		'Country Geek offers comprehensive tailor-made software development and innovative solutions designed to empower businesses and researchers.',
	url: 'https://countrygeek.au',
	areaServed: [
		{
			'@type': 'Country',
			name: 'Australia'
		},
		{
			'@type': 'AdministrativeArea',
			name: 'South West',
			addressRegion: 'Western Australia'
		}
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Services',
		itemListElement: [
			{
				'@type': 'OfferCatalog',
				name: 'Web Development',
				itemListElement: [
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Web Development',
							description:
								'Need to enhance your online presence? We create professional, engaging, and user-friendly websites. Our designs not only reflect your brand image but also effectively engage your customers, increase your credibility, and boost your sales.'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'App Development',
							description:
								'Want to reach your customers at their fingertips? We create custom mobile applications that boost your accessibility, differentiate your brand, and enhance customer loyalty.'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Data Logging and Analysis',
							description:
								'Drowning in data with no insight? We develop automated tools to collect, store, and analyze your data, giving you real-time insights that empower you to make informed decisions, anticipate trends, and stay one step ahead.'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Tech Consulting for Research',
							description:
								'Facing technical hurdles in your research? We offer expert consulting services that enable you to focus on your core research tasks while we handle the tech challenges. From database setup to bespoke analysis tools, we help you enhance your research productivity and quality.'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Custom Software Development',
							description:
								"Struggling with off-the-shelf software that doesn't quite fit your business? We build tailor-made software solutions that streamline your operations, enhance your efficiency, and fuel your business growth."
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Development of Hardware/Software Packages',
							description:
								'Looking for software to optimize your hardware? We design custom software solutions that integrate seamlessly with your hardware devices, simplifying your operations and maximizing your hardware potential.'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							serviceType: 'Agritech Solutions',
							description:
								'Looking for smarter ways to manage your farm operations? We develop innovative agri-tech software that streamlines your operations, promotes sustainable practices, and optimizes yields.'
						}
					}
				]
			}
		]
	}
}
	</script>
</svelte:head>

<slot />
