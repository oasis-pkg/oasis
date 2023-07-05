import { Component, Show } from 'solid-js';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import { A } from '@solidjs/router';

const NotFound: Component<{ is404?: boolean; pkg?: string }> = ({ is404, pkg }) => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	return (
		<div class='flex flex-col justify-center items-center gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
			<p class={`font-bold text-transparent text-5xl bg-clip-text ${store.get.gradient}`}>
				{is404 ? '404' : t('notfound.uh')}
			</p>
			<p class='text-lg'>{is404 ? t('notfound.code') : t('notfound.pkg', { pkg: pkg })}</p>
			<Show when={is404}>
				<A class='underline' href='/'>
					{t('notfound.home')}
				</A>
			</Show>
		</div>
	);
};

export default NotFound;
