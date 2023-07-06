import { Component, For, Show, createEffect, createSignal, onMount } from 'solid-js';
import store from '../store';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import getRandomGradient from '../utils/gradient';
import Search from '../assets/Search';
import Settings from '../assets/Settings';
import config from '../config';
import { A, useNavigate } from '@solidjs/router';
import { SiGithub } from 'solid-icons/si';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';

const Header: Component = () => {
	const [t, { locale }] = useI18n<(typeof dict)['en-US']>();

	const [setLang, setSetLang] = createSignal(false);

	let navigate = useNavigate();

	return (
		<div class='bg-slate-50 dark:bg-gray-800 flex flex-col w-full sticky z-30 top-0 font-heebo'>
			<div
				class={`w-full h-3 ${store.get.gradient}`}
				onClick={() => store.set('gradient', getRandomGradient())}></div>
			<div class='flex items-center px-6 py-4 shadow-md hover:shadow-lg ease-in-out duration-200'>
				<A href='/' class='select-none'>
					<div class='flex items-center gap-x-4'>
						<Icon class='w-9 h-9 hover:rotate-180 ease-[cubic-bezier(.24,1.61,.27,.84)] duration-1000' />
						<p class={`font-extralight text-transparent text-2xl bg-clip-text ${store.get.gradient}`}>
							{t('app')}
						</p>
					</div>
				</A>
				<div class={`mx-24 grow flex ${store.get.gradient} p-0.5 rounded-md`}>
					<input
						autofocus
						id='header_input'
						class='rounded-l-md grow outline-none px-4 py-1.5 bg-slate-50 dark:bg-gray-800 placeholder-slate-400 text-slate-800 dark:placeholder-slate-500 dark:text-slate-300'
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
					<div onclick={() => store.set('CFG_dark', p => !p)}>
						<Show
							when={store.get.CFG_dark}
							fallback={<Moon class='w-8 h-8 cursor-pointer fill-slate-700 dark:fill-slate-300 epic' />}>
							<Sun class='w-8 h-8 cursor-pointer fill-slate-700 dark:fill-slate-300 epic' />
						</Show>
					</div>
					<a href={config.repo} target='_blank'>
						<SiGithub class='w-7 h-7 cursor-pointer fill-slate-700 dark:fill-slate-300' />
					</a>
					<Settings
						onclick={() => setSetLang(p => !p)}
						class='w-8 h-8 cursor-pointer fill-slate-700 dark:fill-slate-300 hover:rotate-180 active:rotate-0 ease-[cubic-bezier(.24,1.61,.27,.84)] duration-[1.5s]'
					/>
					<div
						class={`bg-slate-100 dark:bg-slate-600 fixed top-24 right-4 z-50 ${
							!setLang() && 'opacity-0 h-0 top-16'
						} flex flex-col gap-4 px-4 py-3 justify-center items-center overflow-hidden rounded-md shadow-md hover:shadow-lg transition-all`}>
						<For each={Object.entries(dict).map(([code, lang]) => ({ code: code, name: lang.lang }))}>
							{i => (
								<div
									onClick={() => locale(i.code)}
									class={`flex px-4 py-2 gap-2 select-none items-center ring-1 ring-slate-200 dark:ring-slate-700 rounded-md ${
										i.code == locale() && 'bg-slate-200 dark:bg-slate-700'
									} ease-in-out duration-200`}>
									<p class='font-heebo'>{i.name}</p>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
