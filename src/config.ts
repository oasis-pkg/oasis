import { platform } from './types';

export default {
	repo: 'https://github.com/oasis-pkg/oasis',
	endpoints: [
		/* {
			platform: 'arch',
			base: 'https://archlinux.org/packages',
			endpoints: { query: '/search/json/?q={{pkg}}', data: '/{{repo}}/{{arch}}/{{pkg}}/json' },
		}, */
		{
			platform: 'crates',
			bases: ['https://crates.io/api/v1', 'https://static.crates.io'],
			endpoints: {
				query: '/crates?page=1&per_page=50&q={{pkg}}',
				data: '/crates/{{pkg}}',
				readme: '/readmes/{{pkg}}/{{pkg}}-{{ver}}.html',
			},
		},
	] as { platform: platform; bases: string[]; endpoints: { query: string; data: string; readme: string } }[],
};
