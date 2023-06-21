import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';

export default {
	platform: 'crates',
	query: async q => {
		let uri = config.endpoints.filter(e => e.platform == 'crates')[0];

		let data: any = await axios
			.get(`${uri.bases[0]}${uri.endpoints.query.replaceAll('{{pkg}}', q)}`)
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

		let { data } = await axios.get(uri.bases[0] + uri.endpoints.data.replaceAll('{{pkg}}', q));

		let readme = await axios.get(
			uri.bases[1] +
				uri.endpoints.readme.replaceAll('{{pkg}}', q).replaceAll('{{ver}}', data.crate.newest_version)
		);

		return {
			platform: 'crates',
			name: data.crate.name,
			description: data.crate.description,
			homepage: data.crate.homepage,
			repo: data.crate.repository,
			licenses: [data.versions[0].license],
			readme: readme.data,
			version: data.crate.newest_version,
		};
	},
} as worker;
