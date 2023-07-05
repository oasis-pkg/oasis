import { Component, Match, Switch, onMount } from 'solid-js';
import store from '../store';
import Ok from '../assets/Ok';
import Sound from '../assets/Sound';
import Dismiss from '../assets/Dismiss';

const Toast: Component<{}> = props => {
	const close = () => store.set('toast', { text: '', type: '' });

	onMount(() => {
		setInterval(() => close(), 5000);
	});

	return (
		<div
			class={`bg-slate-100 dark:bg-slate-600 fixed top-24 right-4 z-50 h-10 ${
				store.get.toast.type !== '' ? 'flex gap-4 justify-center items-center' : 'hidden transition-all'
			} overflow-hidden rounded-md shadow-md hover:shadow-lg ease-in-out duration-200 transition-all transform`}>
			<div onclick={close} class={`${store.get.gradient} p-2`}>
				<Switch fallback={<Ok class='fill-slate-100 w-8 h-8' />}>
					<Match when={store.get.toast.type == 'sound'}>
						<Sound class='fill-slate-100 w-8 h-8' />
					</Match>
				</Switch>
			</div>
			<p class=''>{store.get.toast.text}</p>
			<div onClick={close} class='flex justify-center items-center px-1.5 h-full bg-slate-200 dark:bg-slate-700'>
				<Dismiss class='fill-slate-800 dark:fill-slate-200 w-4 h-4' />
			</div>
		</div>
	);
};

export default Toast;
