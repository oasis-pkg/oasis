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
			prettyName: 'Crates',
			bases: ['https://crates.io/api/v1', 'https://static.crates.io'],
			endpoints: {
				query: '/crates?page=1&per_page=50&q={{pkg}}',
				data: '/crates/{{pkg}}',
				readme: '/readmes/{{pkg}}/{{pkg}}-{{ver}}.html',
			},
		},
		{
			platform: 'hexpm',
			prettyName: 'Hex',
			bases: ['https://hex.pm/api'],
			endpoints: {
				query: '/packages?sort=downloads&search={{pkg}}',
				data: '/packages/{{pkg}}',
			},
		},
	] as {
		platform: platform;
		prettyName: string;
		bases: string[];
		endpoints: { query: string; data: string; readme: string };
	}[],
};
