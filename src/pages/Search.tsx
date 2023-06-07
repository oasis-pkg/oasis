import { Component, createResource } from 'solid-js';
import Icon from '../assets/Icon';
import { useI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import store from '../store';
import { useNavigate, useParams, useSearchParams } from '@solidjs/router';

const Search: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();
	const [params, setParams] = useSearchParams();

	const navigate = useNavigate();

	if (!Object.hasOwn({ ...params }, 'q') || !{ ...params }.q) {
		navigate('/');
	}

	return <div></div>;
};

export default Search;
