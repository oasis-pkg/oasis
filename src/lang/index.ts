import { lang } from '../types';

const en: lang = {
	app: 'Oasis',
	slogan: 'All packages, one place.',
	main: {
		search: 'Search a package...',
		learn_more: 'Learn more',
	},
	header: {
		placeholder: 'Search a package...',
	},
};

const es: lang = {
	app: 'Oasis',
	slogan: 'Todos los paquetes, un solo lugar.',
	main: {
		search: 'Busca un paquete...',
		learn_more: 'Saber más',
	},
	header: {
		placeholder: 'Busca un paquete...',
	},
};

const dict = {
	'en-US': en,
	'es-ES': es,
};

export default dict;

let a = [
	[
		{ kind: 'github', url: 'https://github.com/tokio-rs/tokio' }, // del campo "repo"
		{ kind: 'web', url: 'https://tokio.rs' }, // del campo "website"
	],
	[
		{ kind: 'github', url: 'https://github.com/tokio-rs/console' }, // del campo "repo"
		{ kind: 'github', url: 'https://github.com/tokio-rs/console/blob/main/tokio-console' }, // del campo "website"
	],
	[
		{ kind: 'github', url: 'https://github.com/TritonDataCenter/tokio-zookeeper.git' }, // del campo "repo"
		{ kind: 'github', url: 'https://github.com/TritonDataCenter/tokio-zookeeper' }, // del campo "website"
	],
];
