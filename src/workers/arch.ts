import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';
import urlparser from '../utils/urlparser';

/*
: await axios
						.get(
							`${uri.base}${uri.endpoints.data
								.replaceAll('{{repo}}', q.arch.repo)
								.replaceAll('{{arch}}', q.arch.arch)
								.replaceAll('{{pkg}}', q.pkg)}`
						)
						.catch(err => console.error(err));
*/
export default {
	platform: 'arch',
	query: async q => {
		let uri = config.endpoints.filter(e => e.platform == 'arch')[0];

		// FIXME CORS
		let data =
			(await axios
				.get(`${uri.base}${uri.endpoints.query.replaceAll('{{pkg}}', q)}`, {
					headers: {
						'Cross-Origin-Opener-Policy': 'same-origin',
					},
				})
				.catch(err => console.error(err))) || [];

		let arr: pkg[] = [];

		for (const i of data as any) {
			arr.push({
				platform: 'arch',
				name: i.pkgname,
				description: i.pkgdesc,
				links: [{ kind: urlparser(i.url), url: i.url }],
				licenses: i.licenses,
				version: i.pkgver,
				arch: {
					arch: i.arch,
					repo: i.repo,
				},
			} as pkg);
		}

		return arr;
	},
} as worker;
