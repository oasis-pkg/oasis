import { pkg, platform } from '../types';
// import arch from './arch';
import crates from './crates';

/* export const fetchAll = async (q: string, platform: platform[]): Promise<[pkg[], string | null]> => {
	let pkgs: pkg[] = [];

		for (const i of workers) {
		let packages = (await i.query(q).catch(err => console.error(err))) || [];

		pkgs.push(...packages);
	}

	[crates].forEach(async e => {
		let data = await e.query(q).catch(e => )
		pkgs.push(...((await e.query(q).catch(err => console.error(err))) || []));
	});

	return pkgs;
};

export const fetch = async (platform: platform, pkg: string): Promise<null | pkg> => {
	const workers = [crates];

	try {
		return await workers.filter(e => e.platform == platform)[0].data(pkg);
	} catch (e) {
		return null;
	}
}; */

export const fetchAll = async (q: string, platform: platform[]): Promise<[pkg[], string | null]> => {
	try {
		let pkgs: pkg[] = [];
		let data = await Promise.all([crates].map(e => e.query(q)));

		for (const [worker, error] of data) {
			if (error) {
				throw new Error(error);
			}
			pkgs.push(...worker);
		}

		return [pkgs, null];
	} catch (err) {
		return [null, err];
	}
};

export const fetch = async (platform: platform, pkg: string): Promise<[pkg, string | null]> => {
	try {
		let [data, error] = await [crates].filter(e => e.platform == platform)[0].data(pkg);

		if (error) {
			throw new Error(error);
		}

		return [data, null];
	} catch (err) {
		return [null, err];
	}
};
