import { Accessor, Component } from 'solid-js';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import Copy from '../assets/Copy';

const Code: Component<{ children: Accessor<string> }> = ({ children }) => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	return (
		<pre class='flex select-all justify-between items-center ring-1 ring-slate-300 dark:ring-slate-700 rounded-md overflow-hidden'>
			<code class='font-mono mx-4'>{children()}</code>
			<div class={`group relative ${store.get.gradient}`}>
				<div
					class='-z-20 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 active:bg-transparent dark:active:bg-transparent ease-in-out duration-200'
					onClick={() => {
						// @ts-ignore
						navigator.clipboard.writeText(children).catch(e => console.error(e));
						store.set('toast', {
							text: t('toasts.clipboard'),
							type: 'ok',
						});
					}}>
					<Copy class='w-6 h-6 fill-slate-800 dark:fill-slate-200 group-active:fill-slate-100 ease-in-out duration-200' />
				</div>
			</div>
		</pre>
	);
};

export default Code;
