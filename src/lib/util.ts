import ChartBarIcon from './components/icons/ChartBarIcon.svelte';
import CodeIcon from './components/icons/CodeIcon.svelte';
import GlobeIcon from './components/icons/GlobeIcon.svelte';
import MicrochipIcon from './components/icons/Microchip.svelte';
import MicroscopeIcon from './components/icons/MicroscopeIcon.svelte';
import MobileIcon from './components/icons/MobileIcon.svelte';
import TractorIcon from './components/icons/TractorIcon.svelte';

const iconDictionary: {
	[iconName: string]:
		| typeof CodeIcon
		| typeof GlobeIcon
		| typeof MobileIcon
		| typeof MicroscopeIcon
		| typeof MicrochipIcon
		| typeof TractorIcon
		| typeof ChartBarIcon;
} = {
	code: CodeIcon,
	globe: GlobeIcon,
	mobile: MobileIcon,
	microscope: MicroscopeIcon,
	microchip: MicrochipIcon,
	tractor: TractorIcon,
	chartbar: ChartBarIcon
};

export default iconDictionary;
