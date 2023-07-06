/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import App from './App';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';
import { Component } from 'solid-js';
import dict from './lang';
import store from './store';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
	);
}

const I18nProvider: Component<{
	dict?: Record<string, Record<string, any>>;
	locale?: string;
	children: any;
}> = props => (
	<I18nContext.Provider value={createI18nContext(props.dict, props.locale)}>{props.children}</I18nContext.Provider>
);

render(
	() => (
		// FIXME set persistent lang
		<I18nProvider dict={dict} locale={store.get.lang}>
			<Router>
				<App />
			</Router>
		</I18nProvider>
	),
	root!
);
