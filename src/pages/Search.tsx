import { Component, For, Match, Show, Switch, createEffect, createResource, createSignal } from 'solid-js';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import store from '../store';
import { useNavigate, useParams, useSearchParams } from '@solidjs/router';
import { fetchAll } from '../workers/fetch';
import Card from '../components/Search/Card';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import ErrorCmp from '../components/Error';
import { platform } from '../types';
import PkgIcon from '../components/PkgIcon';
import config from '../config';

/* 
FIXME Changing filter refetch data
TODO Save filter at localStorage
Filter should limit endpoints to fetch if configured at localStorage.
If not, should filter the view, not refetch data
*/

const Search: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	const [params, setParams] = useSearchParams();
	const [query, setQuery] = createSignal('');

	const [platformFilter, setPlatformFilter] = createSignal<platform[]>([]);

	const [status, setStatus] = createSignal<'loading' | 'ok' | 'error'>('loading');
	const [err, setErr] = createSignal('');

	const navigate = useNavigate();

	let call = () => console.trace('Me han llamado');

	createEffect(() => {
		if (!Object.hasOwn({ ...params }, 'q') || !{ ...params }.q) {
			navigate('/', {
				replace: true,
			});
		} else {
			setQuery({ ...params }.q);
		}
	}, 'query');

	createEffect(async () => {
		store.set('packages', []);
		store.set('query', query());

		let [packages, err] = await fetchAll(query(), platformFilter());

		if (err) {
			setStatus('error');
			setErr(`${err}`);
			console.error(err);
		} else {
			setStatus('ok');
			store.set('packages', packages || []);
		}
	}, 'fetch');

	createEffect(() => {
		if (
			Object.hasOwn({ ...params }, 'filter') &&
			config.endpoints.map(e => e.platform).some(e => ({ ...params }.filter == e))
		) {
			setPlatformFilter({ ...params }.filter.split('-') as platform[]);
			setStatus('loading');
		}
	}, 'setFilter');

	/* const [params, setParams] = useSearchParams();
	const [status, setStatus] = createSignal<'loading' | 'ok' | 'error'>('loading');
	const [platformFilter, setPlatformFilter] = createSignal<platform[]>([]);

	const [err, setErr] = createSignal('');

	const navigate = useNavigate();


	createEffect(() => {
		setParams({ ...params, filter: platformFilter().join('-') });
	});

	createEffect(async () => {
		let filters = [];

		setStatus('loading');

		if (!Object.hasOwn({ ...params }, 'q') || !{ ...params }.q) {
			navigate('/', {
				replace: true,
			});
		}

		if (
			Object.hasOwn({ ...params }, 'filter') &&
			config.endpoints.map(e => e.platform).some(e => ({ ...params }.filter == e))
		) {
			filters.push({ ...params }.filter);
		}

		store.set('packages', []);
		store.set('query', { ...params }.q);
		let [packages, err] = await fetchAll({ ...params }.q, filters);

		if (err) {
			setStatus('error');
			setErr(`${err}`);
			console.error(err);
		} else {
			setStatus('ok');
			store.set('packages', packages || []);
		}
	}); */

	return (
		<div class='flex justify-center px-10 py-6 gap-5'>
			<Show when={status() == 'ok'}>
				<div class='flex flex-col gap-8 px-8 py-4 w-1/5 h-fit rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
					<h2 class='font-heebo font-thin text-2xl border-b-2 border-slate-300 dark:border-slate-700'>
						{t('search.filter')}
					</h2>
					<div class='flex flex-col gap-2'>
						<For each={config.endpoints.map(e => ({ platform: e.platform, name: e.prettyName }))}>
							{i => (
								<div
									onClick={() => {
										let index = platformFilter().indexOf(i.platform);

										index == -1
											? setPlatformFilter(p => [...p, i.platform])
											: setPlatformFilter(p => p.filter(e => e !== i.platform));
									}}
									class={`
									flex px-4 py-2 gap-2 select-none items-center
									ring-1 ring-slate-200 dark:ring-slate-700 rounded-md

									${platformFilter().includes(i.platform) && 'bg-slate-200 dark:bg-slate-700'}

									
									ease-in-out duration-200
									`}>
									<PkgIcon
										class='w-7 h-7 fill-slate-800 dark:fill-slate-200 hover:rotate-[360deg] ease-[cubic-bezier(.24,1.61,.27,.84)] duration-[1.5s]'
										platform={i.platform}
									/>
									<p>{i.name}</p>
								</div>
							)}
						</For>
					</div>
				</div>
			</Show>
			<div class='grow flex flex-col gap-5'>
				<Show
					when={status() !== 'ok'}
					fallback={
						<For each={store.get.packages} fallback={<NotFound pkg={{ ...params }.q} />}>
							{i => <Card data={i} />}
						</For>
					}>
					<Switch>
						<Match when={status() == 'loading'}>
							<Loading />
						</Match>
						<Match when={status() == 'error'}>
							<ErrorCmp err={err} />
						</Match>
					</Switch>
				</Show>
			</div>
		</div>
	);
};

export default Search;
