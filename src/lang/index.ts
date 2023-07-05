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
		install: string;
		license: string;
		meta: string;
		readme: string;
		crates: string;
		readmeToggle: {
			show: string;
			hide: string;
			remember: string;
		};
	};
	toasts: {
		clipboard: string;
		eg: string;
	};
	notfound: {
		uh: string;
		pkg: string;
		code: string;
		home: string;
	};
	loading: {
		loading: string;
		msg: string;
	};
	error: {
		uh: string;
		msg: string;
		issue: string;
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
		placeholder: 'Press «Ctrl + K» to search a package...',
	},
	data: {
		homepage: 'Homepage',
		repo: 'Repository',
		license: 'License',
		install: 'Install',
		meta: 'Metadata',
		readme: 'Readme',
		crates: 'Add «{{pkg}}» to your project with Cargo command, or add it into Cargo.toml',
		readmeToggle: {
			show: 'Click for spread «readme»',
			hide: 'Click for shrink «readme»',
			remember: 'Keep «readme» always spread',
		},
	},
	toasts: {
		clipboard: 'Copied to clipboard',
		eg: "What the...? That's weird. Anyway, enjoy it :)",
	},
	glossary: {
		or: 'or',
		copy: 'Copy',
		copied: 'Copied',
	},
	loading: {
		loading: 'Loading...',
		msg: "This is taking too much time. Check if there isn't a Faraday cage over the router.",
	},
	error: {
		uh: 'Uh...',
		msg: 'Looks there was an error while searching the package. Open the console with «Ctrl + Shift + I» for details.',
		issue: 'Open an issue at GitHub',
	},
	notfound: {
		uh: 'Uh...',
		pkg: "Looks that «{{pkg}}» doesn't exists. Possibly exists, but it's in Narnia.",
		code: "Looks you're lost. Don't worry, look at the compass and go to the northwest.",
		home: 'Return to home',
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
		placeholder: 'Pulsa «Ctrl + K» para buscar un paquete...',
	},
	data: {
		homepage: 'Página de inicio',
		repo: 'Repositorio',
		license: 'Licencia',
		install: 'Instalación',
		meta: 'Metadatos',
		readme: 'Readme',
		crates: 'Importa «{{pkg}}» a tu proyecto con el comando Cargo, o añádelo en Cargo.toml',
		readmeToggle: {
			show: 'Pulsa para extender «readme»',
			hide: 'Pulsa para contraer «readme»',
			remember: 'Mantener «readme» siempre extendido',
		},
	},
	toasts: {
		clipboard: 'Copiado al portapapeles',
		eg: '¿Pero qué...? Esto es raro. Da igual, disfrútalo :)',
	},
	glossary: {
		or: 'o',
		copy: 'Copiar',
		copied: 'Copiado',
	},
	loading: {
		loading: 'Loading...',
		msg: "This is taking a while. Check if there isn't a Faraday cage over the router.",
	},
	error: {
		uh: 'Vaya...',
		msg: 'Parece que hubo un error mientras se buscaba el paquete. Abre la consola con «Ctrl + Shift + I» para más detalles.',
		issue: 'Abrir un issue en GitHub',
	},

	notfound: {
		uh: 'Vaya...',
		pkg: "Looks that «{{pkg}}» doesn't exists.",
		code: "Looks you're lost. ",
		home: 'Volver a inicio',
	},
};

const dict = {
	'en-US': en,
	'es-ES': es,
};

export default dict;
