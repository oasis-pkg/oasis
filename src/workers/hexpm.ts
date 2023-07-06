import axios from 'axios';
import { pkg, worker } from '../types';
import config from '../config';

const uri = config.endpoints.filter(e => e.platform == 'hexpm')[0];

export default {
	platform: 'hexpm',
	async query(q) {
		try {
			let data: any = await axios.get(uri.bases[0] + uri.endpoints.query.replaceAll('{{pkg}}', q));

			let arr: pkg[] = data.data.map(e => ({
				platform: 'hexpm',
				name: e.name,
				description: e.meta.description,
				repo: e.meta.links.GitHub || e.meta.links.GitLab,
				licenses: [],
				version: e.latest_version,
			}));

			return [arr, null];
		} catch (err) {
			return [null, err];
		}
	},
	async data(q) {
		try {
			let content = await axios.get(uri.bases[0] + uri.endpoints.data.replaceAll('{{pkg}}', q));

			console.log(content);

			let value: pkg = {
				platform: 'hexpm',
				name: content.data.name,
				description: content.data.meta.description,
				homepage: null,
				repo: content.data.meta.links.GitHub || content.data.meta.links.GitLab,
				licenses: content.data.meta.licenses,
				version: content.data.latest_version,
				hexpm: {
					cmds: Object.values(content.data.configs),
				},
			};

			return [value, null];
		} catch (err) {
			return [null, err];
		}
	},
} as worker;
