import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';
import urlparser from '../utils/urlparser';

export default {
	platform: 'crates',
	query: async q => {
		let uri = config.endpoints.filter(e => e.platform == 'crates')[0];

		let data: any = await axios
			.get(`${uri.base}${uri.endpoints.query.replaceAll('{{pkg}}', q)}`, {})
			.catch(err => console.error(err));

		let arr: pkg[] = [];

		// FIXME fix links parser
		for (const i of data.data.crates) {
			arr.push({
				platform: 'crates',
				name: i.name,
				description: i.description,
				link: {
					kind: urlparser(`${i.homepage == i.repository ? '' : i.homepage}`),
					url: `${i.homepage == i.repository ? '' : i.homepage}`,
				},

				repo: { kind: urlparser(`${i.repository}`), url: `${i.repository}` },
				licenses: [],
				version: i.newest_version,
			} as pkg);
		}

		return arr;
	},
} as worker;
