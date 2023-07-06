import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';

const uri = config.endpoints.filter(e => e.platform == 'crates')[0];

export default {
	platform: 'crates',
	async query(q) {
		try {
			let data: any = await axios.get(uri.bases[0] + uri.endpoints.query.replaceAll('{{pkg}}', q));

			let arr: pkg[] = data.data.crates.map(e => ({
				platform: 'crates',
				name: e.name,
				description: e.description,
				homepage: e.homepage,
				repo: e.repository,
				licenses: [],
				version: e.newest_version,
			}));

			return [arr, null];
		} catch (err) {
			return [null, err];
		}
	},
	async data(q) {
		try {
			let content = await axios.get(uri.bases[0] + uri.endpoints.data.replaceAll('{{pkg}}', q));

			let value: pkg = {
				platform: 'crates',
				name: content.data.crate.name,
				description: content.data.crate.description,
				homepage: content.data.crate.homepage,
				repo: content.data.crate.repository,
				licenses: [content.data.versions[0].license],
				version: content.data.crate.newest_version,
			};

			let readme: any = await axios
				.get(uri.bases[1] + uri.endpoints.readme.replaceAll('{{pkg}}', q).replaceAll('{{ver}}', value.version))
				.then(data => data.data)
				.catch(() => null);

			value.readme = readme;

			return [value, null];
		} catch (err) {
			return [null, err];
		}
	},
} as worker;
