import { platform } from './types';

export default {
	repo: 'https://github.com/oasis-pkg/oasis',
	endpoints: [
		{
			platform: 'arch',
			base: 'https://archlinux.org/packages',
			endpoints: { query: '/search/json/?q={{pkg}}', data: '/{{repo}}/{{arch}}/{{pkg}}/json' },
		},
	] as [{ platform: platform; base: string; endpoints: { query: string; data: string } }],
};
