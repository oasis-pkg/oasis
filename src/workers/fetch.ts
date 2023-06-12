import store from '../store';
import { pkg, platform } from '../types';
// import arch from './arch';
import crates from './crates';

export default async (q: string, platform: platform[]) => {
	let workers = [crates];

	let pkgs: pkg[] = [];

	// TODO add platform filtering
	for (const i of workers) {
		let packages = (await i.query(q).catch(err => console.error(err))) || [];

		pkgs.push(...packages);
	}

	return pkgs;
};
