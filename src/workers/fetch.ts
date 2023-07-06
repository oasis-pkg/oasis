import { pkg, platform } from '../types';
import crates from './crates';
import hexpm from './hexpm';

export const fetchAll = async (q: string, platform: platform[]): Promise<[pkg[], string | null]> => {
	try {
		let platforms = [crates, hexpm];

		let pkgs: pkg[] = [];
		let data = await Promise.all(
			platform.length
				? platforms.filter(e => platform.includes(e.platform)).map(e => e.query(q))
				: platforms.map(e => e.query(q))
		);

		for (const [worker, error] of data) {
			if (error) {
				return [null, error];
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
		let [data, error] = await [crates, hexpm].filter(e => e.platform == platform)[0].data(pkg);

		if (error) {
			throw new Error(error);
		}

		return [data, null];
	} catch (err) {
		return [null, err];
	}
};
