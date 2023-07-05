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

const Search: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	const [params, setParams] = useSearchParams();
	const [status, setStatus] = createSignal<'loading' | 'ok' | 'error'>('loading');

	const [err, setErr] = createSignal('');

	const navigate = useNavigate();

	createEffect(async () => {
		setStatus('loading');

		if (!Object.hasOwn({ ...params }, 'q') || !{ ...params }.q) {
			navigate('/', {
				replace: true,
			});
		}

		store.set('packages', []);
		store.set('query', { ...params }.q);
		let [packages, err] = await fetchAll({ ...params }.q, []);

		if (err) {
			setStatus('error');
			setErr(err);
			console.error(err);
		} else {
			setStatus('ok');
			store.set('packages', packages || []);
		}
	});

	return (
		<div class='px-10 py-6 flex flex-col gap-y-5'>
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

			{/* <Loading />
			<NotFound is404={false} pkg={{ ...params }.q} />
			<Show when={status() !== 'ok'} fallback={}>
				<Switch>
						<Match when={status() == 'loading'}></Match>
						<Match when={status() == 'notfound'}>NotFound xd</Match>
						<Match when={status() == 'error'}>Error :(</Match>
					</Switch>
			</Show> */}
		</div>
	);
};

export default Search;
