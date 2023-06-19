import {
	Component,
	For,
	JSX,
	Match,
	Show,
	Switch,
	children,
	createEffect,
	createResource,
	createSignal,
} from 'solid-js';
import { pkg, platform } from '../types';
import { fetch } from '../workers/fetch';
import { useParams } from '@solidjs/router';
import { SiGithub, SiRust } from 'solid-icons/si';
import PkgIcon from '../components/PkgIcon';
import store from '../store';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import urlparser from '../utils/urlparser';

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
		<div class='flex flex-col gap-y-3'>
			<p class='font-semibold font-heebo'>{props.title}</p>
			{c()}
		</div>
	);
};

const Package: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	const { platform, pkg } = useParams();
	const [loaded, setLoaded] = createSignal(false);
	const [data, setData] = createSignal({} as pkg); // Solid "createResource" doesn't work

	if (urlparser(data().homepage) == urlparser(data().repo)) {
		console.log(urlparser(data().homepage) == urlparser(data().repo));
		setData({ ...data(), homepage: '' });
		console.log(data());
	}

	// FIXME Definitely I need to improve error handling
	// Rust error handling is better
	fetch(platform as platform, pkg)
		.then(d => {
			setData(d);
			setLoaded(true);
			store.set('query', '');
		})
		.catch(() => null);

	return (
		<div class='p-8'>
			<Switch fallback={<div>valla, esto no va</div>}>
				<Match when={!loaded()}>
					<p>Loading...</p>
				</Match>
				<Match when={data()}>
					<div class='flex flex-col gap-y-8 px-8 py-6 rounded-md bg-gray-100 shadow-md hover:shadow-lg ease-in-out duration-200'>
						<div class='flex gap-x-8 items-center'>
							<PkgIcon class='w-14 h-14 fill-slate-800' platform={data().platform} />
							<div class='flex flex-col gap-y-2'>
								<div class='flex gap-x-3 items-center'>
									<p class='font-light text-4xl font-heebo select-all'>{data().name}</p>
									<p class='text-slate-700 font-light font-heebo'>{data().version}</p>
								</div>
								<p class='font-heebo'>{data().description}</p>
							</div>
						</div>
						<div class='flex gap-x-12'>
							<Show when={data().homepage}>
								<Section title={t('data.homepage')}>
									<a class='underline' href={data().homepage} target='_blank'>
										{data().homepage.replace(/^https?:\/\//, '')}
									</a>
								</Section>
							</Show>
							<Show when={data().repo}>
								<Section title={t('data.repo')}>
									<a class='underline' href={data().repo} target='_blank'>
										{data().repo.replace(/^https?:\/\//, '')}
									</a>
								</Section>
							</Show>
							<Show when={data().licenses.filter(Boolean).length > 0}>
								<Section title={t('data.license')}>
									<p>{data().licenses.join(t('glossary.or'))}</p>
								</Section>
							</Show>
						</div>
						<Section class='gap-y-72' title='Install'>
							<p class='mb-2'>{t('data.crates')}</p>
							<For each={command(data().platform, data().name, data().version)}>
								{i => (
									<pre class='flex justify-between items-center ring-1 ring-slate-300 px-4 py-2 rounded-md'>
										<code class='font-jetbrains select-all'>{i}</code>
										<div
											onClick={() => navigator.clipboard.writeText(i).catch(() => null)}
											class='flex gap-x-4 items-center'>
											<p class='font-heebo'>Copy</p>
											<SiGithub class='w-4 h-4' />
										</div>
									</pre>
								)}
							</For>
						</Section>
					</div>
				</Match>
			</Switch>
		</div>
	);
};

export default Package;
