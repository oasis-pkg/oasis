export type lang = {
	app: string;
	slogan: string;
	main: {
		search: string;
		learn_more: string;
	};
};

const en: lang = {
	app: 'Oasis',
	slogan: 'All packages, one place.',
	main: {
		search: 'Search a package...',
		learn_more: 'Learn more',
	},
};

const es: lang = {
	app: 'Oasis',
	slogan: 'Todos los paquetes, un solo lugar.',
	main: {
		search: 'Search a package...',
		learn_more: 'Learn more',
	},
};

const dict = {
	'en-US': en,
	'es-ES': es,
};

export default dict;
