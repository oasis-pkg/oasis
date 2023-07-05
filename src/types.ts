export type platform = 'arch' | 'aur' | 'crates';
export type urltype = 'any' | 'github' | 'gitlab';
export type url = { kind: urltype; url: string };

export type pkg = {
	name: string;
	description: string;
	version: string;
	licenses: string[];
	platform: platform; // TODO add more platforms,
	homepage: string;
	repo: string;
	readme?: string;
	// links?: string[];
	// TODO add basic data struct for each platform
	arch?: {
		arch: string;
		repo: string;
	};
};

/*
At this point, basic data can be obtained from search array
there is no need to fetch a package for extra data
*/
export type worker = {
	platform: platform;
	query: (q: string) => Promise<[pkg[] | null, string | null]>;
	data: (
		q: string /* { pkg: string; arch: { arch?: string; repo?: string } } */
	) => Promise<[pkg | null, string | null]>;
};
