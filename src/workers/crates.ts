import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';

export default {
	platform: 'crates',
	query: async q => {
		let uri = config.endpoints.filter(e => e.platform == 'crates')[0];

		let data: any = await axios
			.get(`${uri.base}${uri.endpoints.query.replaceAll('{{pkg}}', q)}`)
			.catch(err => console.error(err));

		let arr: pkg[] = [];

		for (const i of data.data.crates) {
			arr.push({
				platform: 'crates',
				name: i.name,
				description: i.description,
				homepage: i.homepage,
				repo: i.repository,
				licenses: [],
				version: i.newest_version,
			} as pkg);
		}

		return arr;
	},
	data: async q => {
		let uri = config.endpoints.filter(e => e.platform == 'crates')[0];

		let { data } = await axios.get(`${uri.base}${uri.endpoints.data.replaceAll('{{pkg}}', q)}`);

		return {
			platform: 'crates',
			name: data.crate.name,
			description: data.crate.description,
			homepage: data.crate.homepage,
			repo: data.crate.repository,
			licenses: [data.versions[0].license],
			version: data.crate.newest_version,
		};
	},
} as worker;
