import { createEffect, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import getRandomGradient from '../utils/gradient';
import { pkg } from '../types';

const [store, setStore] = createStore({
	query: '',
	lang: localStorage.getItem('lang') || navigator.language,
	gradient: getRandomGradient(),
	packages: [] as pkg[],
	toast: {
		type: '' as '' | 'ok' | 'sound',
		text: '',
	},
	CFG_extendedReadme: localStorage.getItem('extended_readme') == '1',
	CFG_dark: localStorage.getItem('dark') == '1',
});

createEffect(
	on(
		() => store.lang,
		() => localStorage.setItem('lang', store.lang || navigator.language)
	)
);

createEffect(
	on(
		() => store.CFG_extendedReadme,
		() => localStorage.setItem('extended_readme', store.CFG_extendedReadme ? '1' : '0')
	)
);

createEffect(
	on(
		() => store.CFG_dark,
		() => {
			localStorage.setItem('dark', store.CFG_dark ? '1' : '0');

			let root = document.documentElement.classList;

			store.CFG_dark ? root.add('dark') : root.remove('dark');
		}
	)
);

export default {
	get: store,
	set: setStore,
};
