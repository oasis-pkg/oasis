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
	data: {
		homepage: string;
		repo: string;
		license: string;
		crates: string;
	};
	glossary: {
		or: string;
		copy: string;
		copied: string;
	};
};

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
	data: {
		homepage: 'Homepage',
		repo: 'Repository',
		license: 'License',
		crates: 'Add {{pkg}} to your project with Cargo command, or add it into Cargo.toml',
	},
	glossary: {
		or: 'or',
		copy: 'Copy',
		copied: 'Copied',
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
	data: {
		homepage: 'Página de inicio',
		repo: 'Repositorio',
		license: 'Licencia',
		crates: 'Importa {{pkg}} a tu proyecto con el comando Cargo, o añádelo en Cargo.toml',
	},
	glossary: {
		or: 'o',
		copy: 'Copiar',
		copied: 'Copiado',
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
