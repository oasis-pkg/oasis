import store from '../store';
import { platform } from '../types';
import arch from './arch';

export default async (query: string, platform: platform[]) => {
	let workers = [arch];

	// TODO add platform filtering
	for (const i of workers) {
		let packages = (await i.query(query).catch(err => console.error(err))) || [];

		store.set('packages', p => p.concat(packages));
	}
};
