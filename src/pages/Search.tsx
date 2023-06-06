import { Component } from 'solid-js';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import store from '../store';

const Search: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	return (
		<div class='flex flex-col w-full'>
			<div class={`w-full h-3 ${store.get.gradient}`}></div>
			<div class='flex items-center gap-x-4 px-6 py-3'>
				<Icon class='w-10 h-10' />
				<p class={`font-extralight text-transparent text-2xl bg-clip-text ${store.get.gradient}`}>{t('app')}</p>
			</div>
		</div>
	);
};

export default Search;
