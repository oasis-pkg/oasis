import { Component, createSignal } from 'solid-js';
import store from '../store';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import getRandomGradient from '../utils/gradient';
import Search from '../assets/Search';
import GitHub from '../assets/GitHub';
import Settings from '../assets/Settings';
import config from '../config';
import { A, useNavigate } from '@solidjs/router';

const Header: Component = () => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	let navigate = useNavigate();

	return (
		<div class='bg-slate-50 flex flex-col w-full sticky top-0'>
			<div
				class={`w-full h-3 ${store.get.gradient}`}
				onClick={() => store.set('gradient', getRandomGradient())}></div>
			<div class='flex items-center px-6 py-4 shadow-md hover:shadow-lg ease-in-out duration-200'>
				<A href='/' class='select-none'>
					<div class='flex items-center gap-x-4'>
						<Icon class='w-10 h-10' />
						<p class={`font-extralight text-transparent text-2xl bg-clip-text ${store.get.gradient}`}>
							{t('app')}
						</p>
					</div>
				</A>
				<div class={`mx-24 grow flex ${store.get.gradient} p-0.5`}>
					<input
						class='grow outline-none px-4 py-1 bg-slate-50 placeholder-slate-400 text-slate-800'
						placeholder={t('header.placeholder')}
						type='text'
						value={store.get.query}
						onInput={e => store.set('query', e.target.value)}
						onkeypress={e => {
							if (e.key == 'Enter' && store.get.query) {
								navigate(`/search?q=${store.get.query}`);
							}
						}}
					/>
					{/* FIXME add animation */}
					<div class='px-3 py-1.5'>
						<Search class='fill-slate-100 w-6 h-6' />
					</div>
				</div>
				<div class='flex gap-x-4 items-center'>
					<a href={config.repo} target='_blank'>
						<GitHub class='w-7 h-7 fill-slate-600 hover:fill-slate-800 ease-in-out duration-200' />
					</a>
					<Settings
						onClick={() => console.log(store.get.packages)}
						class='w-8 h-8 fill-slate-600 hover:fill-slate-800 ease-in-out duration-200'
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
