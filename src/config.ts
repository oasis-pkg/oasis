import { platform } from './types';

export default {
	repo: 'https://github.com/oasis-pkg/oasis',
	endpoints: [
		{
			platform: 'arch',
			base: 'https://archlinux.org/packages',
			endpoints: { query: '/search/json/?q={{pkg}}', data: '/{{repo}}/{{arch}}/{{pkg}}/json' },
		},
		{
			platform: 'crates',
			base: 'https://crates.io/api/v1',
			endpoints: {
				query: '/crates?page=1&per_page=50&q={{pkg}}',
				data: '/crates/{{pkg}}',
			},
		},
	] as { platform: platform; base: string; endpoints: { query: string; data: string } }[],
};
