import { Component, For, createEffect, createResource } from 'solid-js';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import store from '../store';
import { useNavigate, useParams, useSearchParams } from '@solidjs/router';
import { fetchAll } from '../workers/fetch';
import Card from '../components/Search/Card';

const Search: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	const [params, setParams] = useSearchParams();

	const navigate = useNavigate();

	createEffect(async () => {
		if (!Object.hasOwn({ ...params }, 'q') || !{ ...params }.q) {
			navigate('/', {
				replace: true,
			});
		}

		// FIXME parallel queries
		store.set('packages', []);
		store.set('query', { ...params }.q);
		let packages = await fetchAll({ ...params }.q, []).catch(err => console.error(err));

		store.set('packages', packages || []);
	});

	return (
		<div class='px-10 py-6 flex flex-col gap-y-5'>
			<For each={store.get.packages}>{i => <Card data={i} />}</For>
		</div>
	);
};

export default Search;
