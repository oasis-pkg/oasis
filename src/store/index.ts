import { createEffect, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import getRandomGradient from '../utils/gradient';
import { pkg } from '../types';
import { useNavigate } from '@solidjs/router';
import fetch from '../workers/fetch';

const [store, setStore] = createStore({
	query: '',
	lang: localStorage.getItem('lang') || navigator.language,
	gradient: getRandomGradient(),
	packages: [] as pkg[],
});

createEffect(
	on(
		() => store.lang,
		() => {
			localStorage.setItem('lang', store.lang || navigator.language);
		}
	)
);

/* createEffect(
	on(
		() => store.query,
		async () => {
			let pkgs = (await fetch(store.query, []).catch(err => console.error(err))) || []; // FIXME platform filter

			setStore('packages', p => p.concat(pkgs));

			console.info('me han llamado', pkgs);
		}
	)
); */

export default {
	get: store,
	set: setStore,
};
