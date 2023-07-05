import { Component, For, JSX, Match, Show, Switch, children, createEffect, createSignal } from 'solid-js';
import { pkg, platform } from '../types';
import { fetch } from '../workers/fetch';
import { useParams } from '@solidjs/router';
import PkgIcon from '../components/PkgIcon';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import urlparser from '../utils/urlparser';
import Copy from '../assets/Copy';
import Chevron from '../assets/Chevron';
import Toggle from '../components/Form/Toggle';
import { createAudio } from '@solid-primitives/audio';
import egData from '../assets/eg.opus';
import egp from '../utils/eg';
import Loading from '../components/Loading';
import Code from '../components/Code';

const command = (platform: platform, pkg: string, ver: string): string[] => {
	let cmds = [];

	switch (platform) {
		case 'crates':
			cmds.push(`cargo add ${pkg}`, `${pkg} = "${ver}"`);
	}

	return cmds;
};

const Section: Component<{ title: string; children: JSX.Element; class?: string }> = props => {
	const c = children(() => props.children);

	return (
		<div class='flex flex-col gap-y-1'>
			<p class='font-semibold font-heebo'>{props.title}</p>
			{c()}
		</div>
	);
};

const Package: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	const { platform, pkg } = useParams();
	const [loaded, setLoaded] = createSignal(false);
	const [error, setError] = createSignal<any>();
	const [extendedReadme, setExtendedReadme] = createSignal(store.get.CFG_extendedReadme);
	const [data, setData] = createSignal({} as pkg); // Solid "createResource" doesn't work
	const [cmd, setCmd] = createSignal([]);

	const [eg, setEg] = createSignal(1);
	const controls = createAudio(egp())[1];

	createEffect(() => {
		setExtendedReadme(store.get.CFG_extendedReadme);
	});

	createEffect(async () => {
		if (eg() % 12 == 0) {
			controls.setVolume(1);
			controls.play();
			store.set('toast', { type: 'sound', text: t('toasts.eg') });
		}
	});

	// FIXME Definitely I need to improve error handling
	// Rust error handling is better
	fetch(platform as platform, pkg).then(d => {
		let [da, err] = d;

		if (err) {
			setError(err);
		}

		setData(da);
		setLoaded(true);

		setCmd(command(data().platform, data().name, data().version));

		// This should be after loading signal to avoid loading hanging in case of error
		if (urlparser(data().homepage) == urlparser(data().repo)) setData({ ...data(), homepage: '' });
		store.set('query', '');
	});

	return (
		<div class='p-8'>
			<Switch fallback={<div>valla, esto no va: {`${error()}`}</div>}>
				<Match when={!loaded()}>
					<Loading />
				</Match>
				<Match when={data()}>
					<div class='flex flex-col gap-4'>
						<div class='flex gap-4 flex-col xl:flex-row'>
							{/* General */}
							<div class='flex flex-col gap-4 grow'>
								{/* Title */}
								<div class='flex flex-col gap-10 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
									<div class='flex gap-x-8 items-center'>
										<PkgIcon
											onClick={() => setEg(eg() + 1)}
											class='w-14 h-14 fill-slate-800 dark:fill-slate-200 epic'
											platform={data().platform}
										/>
										<div class='flex flex-col gap-y-2'>
											<div class='flex gap-x-3 items-center '>
												<h1 class='font-light text-4xl font-heebo select-all'>{data().name}</h1>
												<p class='text-slate-700 dark:text-slate-300 font-light font-heebo select-all'>
													{data().version}
												</p>
											</div>
											<p class='font-heebo'>{data().description}</p>
										</div>
									</div>
								</div>

								{/* Installation */}
								<div class='min-w-fit flex flex-col gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
									<h2 class='font-heebo font-thin text-2xl border-b-2 border-slate-300 dark:border-slate-700'>
										{t('data.install')}
									</h2>
									<div class='flex flex-col gap-3'>
										{/* @ts-ignore */}
										<p class='mb-2'>{t(`data.${data().platform}`, { pkg: data().name })}</p>
										<For each={cmd()}>{i => <Code>{i}</Code>}</For>
									</div>
								</div>

								{/* Metadata */}
								<Show
									when={data().homepage || data().repo || data().licenses.filter(Boolean).length > 0}>
									<div class='flex flex-col gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
										<h2 class='font-heebo font-thin text-2xl border-b-2 border-slate-300 dark:border-slate-700'>
											{t('data.meta')}
										</h2>
										<div class='flex gap-8'>
											<Show when={data().homepage}>
												<div class='flex flex-col gap-y-1'>
													<p class='font-semibold font-heebo'>{t('data.homepage')}</p>
													<a class='underline' href={data().homepage} target='_blank'>
														{data().homepage.replace(/^https?:\/\//, '')}
													</a>
												</div>
											</Show>
											<Show when={data().repo}>
												<div class='flex flex-col gap-y-1'>
													<p class='font-semibold font-heebo'>{t('data.repo')}</p>
													<a class='underline' href={data().repo} target='_blank'>
														{data().repo.replace(/^https?:\/\//, '')}
													</a>
												</div>
											</Show>
											<Show when={data().licenses.filter(Boolean).length > 0}>
												<div class='flex flex-col gap-y-1'>
													<p class='font-semibold font-heebo'>{t('data.license')}</p>
													<p>{data().licenses.join(t('glossary.or'))}</p>
												</div>
											</Show>
										</div>
									</div>
								</Show>
							</div>

							{/* Readme */}
							<Show when={data().readme}>
								<div class='flex flex-col gap-10 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
									<h2 class='font-heebo font-thin text-2xl border-b-2 border-slate-300 dark:border-slate-700'>
										{t('data.readme')}
									</h2>
									<div id='prose'>
										<div
											class={`
									${!extendedReadme() && 'line-clamp-4'}
									prose
									text-slate text-justify
									prose-h1:font-light prose-h1:text-4xl prose-h1:font-heebo prose-h1:text-center
									prose-h2:font-light prose-h2:text-2xl prose-h2:font-heebo prose-h2:border-b-2 prose-h2:border-slate-300 prose-h2:dark:border-slate-700 prose-h2:text-center
									prose-h3:font-light prose-h3:text-xl prose-h3:font-heebo prose-h3:underline prose-h3:underline-offset-2 prose-h3:decoration-slate-500/50 
									prose-h4:font-heebo prose-h4:font-light
									prose-h5:font-heebo prose-h5:font-light
									prose-h6:font-heebo prose-h6:font-light
									prose-code:text-slate-800

									prose-img:m-4 prose-img:rounded-md
									prose-pre:bg-transparent prose-pre:rounded-md prose-pre:ring-1 prose-pre:ring-slate-300 prose-pre:select-text
									
									prose-h1:dark:text-slate-300 prose-h2:dark:text-slate-300 prose-h3:dark:text-slate-300 prose-h4:dark:text-slate-300 prose-h5:dark:text-slate-300 prose-h6:dark:text-slate-300
									prose-p:dark:text-slate-300 prose-strong:dark:text-slate-300 prose-li:dark:text-slate-300 prose-a:dark:text-slate-300 prose-code:dark:text-slate-300 prose-i:dark:text-slate-300 
									`}
											innerHTML={data().readme}></div>
									</div>
									<div class='flex flex-col justify-center items-center gap-6 mt-auto px-4 py-2'>
										<div
											onClick={() => setExtendedReadme(p => !p)}
											class='group flex justify-center items-center px-4 py-2 gap-2 ring-1 ring-slate-300 rounded-md'>
											<Chevron
												class={`w-8 h-8 fill-slate-700 ${extendedReadme() && 'rotate-180'}`}
											/>
											<p class='font-heebo'>
												{t(`data.readmeToggle.${extendedReadme() ? 'hide' : 'show'}`)}
											</p>
										</div>
										<Toggle
											value={store.get.CFG_extendedReadme}
											setter={() => store.set('CFG_extendedReadme', p => !p)}>
											{t('data.readmeToggle.remember')}
										</Toggle>
									</div>
								</div>
							</Show>
						</div>
					</div>
				</Match>
			</Switch>
		</div>
	);
};

/* 
<div class='min-w-fit flex flex-col gap-8 px-8 py-6 rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>

</div>
*/
export default Package;
