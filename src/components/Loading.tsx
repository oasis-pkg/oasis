import { Component, For } from 'solid-js';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import getRandomGradient from '../utils/gradient';

const Circle: Component<{}> = props => {
	return <div class={`w-10 h-10 rounded-full shadow-md ${getRandomGradient()} animate-pulse`}></div>;
};

const Loading: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	return (
		<div class='flex flex-col items-center justify-center gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200 animate-pulse'>
			<div class='flex gap-4'>
				<Circle />
				<Circle />
				<Circle />
			</div>
			<p class='text-lg'>{t('loading.loading')}</p>
		</div>
	);
};

export default Loading;
