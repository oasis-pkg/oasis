export type platform = 'arch' | 'aur';
export type urltype = 'any' | 'github' | 'gitlab';
export type url = { kind: urltype; url: string };

export type pkg = {
	name: string;
	description: string;
	version: string;
	licenses: [string];
	platform: platform; // TODO add more platforms,
	links?: [url];
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
	query: (query: string) => Promise<pkg[]>;
	// data: (query: { pkg: string; arch: { arch?: string; repo?: string } }) => Promise<pkg>;
};

export type lang = {
	app: string;
	slogan: string;
	main: {
		search: string;
		learn_more: string;
	};
	header: {
		placeholder: string;
	};
};
