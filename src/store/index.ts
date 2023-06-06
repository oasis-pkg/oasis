import { createEffect, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import getRandomGradient from '../utils/gradient';

const [store, setStore] = createStore({
	query: '',
	lang: localStorage.getItem('lang') || navigator.language,
	gradient: getRandomGradient(),
});

createEffect(
	on(
		() => store.lang,
		() => {
			localStorage.setItem('lang', store.lang || navigator.language);
		}
	)
);

export default {
	get: store,
	set: setStore,
};
