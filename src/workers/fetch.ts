import { pkg, platform } from '../types';
import arch from './arch';
import crates from './crates';

export const fetchAll = async (q: string, platform: platform[]) => {
	const workers = [crates];
	let pkgs: pkg[] = [];

	// TODO add platform filtering
	// FIXME Parallel queries (use forEach)
	for (const i of workers) {
		let packages = (await i.query(q).catch(err => console.error(err))) || [];

		pkgs.push(...packages);
	}

	/* [crates].forEach(async e => {
		pkgs.push(...((await e.query(q).catch(err => console.error(err))) || []));
	}); */

	return pkgs;
};

export const fetch = async (platform: platform, pkg: string): Promise<null | pkg> => {
	const workers = [crates];

	try {
		return await workers.filter(e => e.platform == platform)[0].data(pkg);
	} catch (e) {
		return null;
	}
};
