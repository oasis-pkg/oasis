import { Accessor, Component, Show } from 'solid-js';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import { A } from '@solidjs/router';
import config from '../config';
import Code from './Code';

const ErrorCmp: Component<{ err: Accessor<string> }> = ({ err }) => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	return (
		<div class='flex flex-col justify-center items-center gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
			<p class={`font-bold text-transparent text-5xl bg-clip-text ${store.get.gradient}`}>{t('error.uh')}</p>
			<p class='text-lg'>{t('error.msg')}</p>
			<Code>{err}</Code>
			<a class='underline' href={config.repo + '/issues/new'} target='_blank'>
				{t('error.issue')}
			</a>
		</div>
	);
};

export default ErrorCmp;
