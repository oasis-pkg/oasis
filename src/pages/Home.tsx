import { Component, createSignal } from 'solid-js';
import Icon from '../assets/Icon';
import IconFlat from '../assets/IconFlat';
import Search from '../assets/Search';
import Chevron from '../assets/Chevron';
import { SiArchlinux } from 'solid-icons/si';
import { useI18n, useScopedI18n } from '@solid-primitives/i18n';
import dict from '../lang';
import store from '../store';
import getRandomGradient from '../utils/gradient';
import { useNavigate } from '@solidjs/router';

/*

FIXME

- Content doesn't fit on small screens

*/

const Home: Component<{}> = props => {
	const [t] = useI18n<(typeof dict)['en-US']>();

	let navigate = useNavigate();

	let learn;

	return (
		<div class='text-slate-900 relative'>
			<div class={`w-full h-screen flex flex-col items-center pt-24 pb-8 gap-y-24 ${store.get.gradient}`}>
				<div class='flex flex-col gap-y-7 justify-center items-center p-4 text-slate-100'>
					<div class='animate-spin-right'>
						<IconFlat
							onClick={() => store.set('gradient', getRandomGradient())}
							class='fill-slate-100 w-24 h-24 animate-spin-left'
						/>
					</div>
					<div class='flex flex-col justify-center items-center'>
						<p class='font-semibold text-4xl'>{t('app')}</p>
						<p class='font-medium text-2xl'>{t('slogan')}</p>
					</div>
				</div>
				<div class='flex justify-center w-full'>
					<input
						class='bg-slate-100 w-1/3 px-4 py-2 outline-none placeholder-slate-400'
						placeholder={t('main.search')}
						type='text'
						onInput={e => store.set('query', e.target.value)}
						onkeypress={async e => {
							if (e.key == 'Enter' && store.get.query) {
								navigate(`/search?q=${store.get.query}`);
							}
						}}
					/>
					<div class='px-4 py-2 bg-slate-700 hover:cursor-pointer'>
						<Search class='fill-slate-100 w-6 h-6' />
					</div>
				</div>
				<div
					onClick={() => learn.scrollIntoView({ behavior: 'smooth' })}
					class='flex flex-col h-full justify-end items-center hover:cursor-pointer'>
					<p class='font-medium text-slate-100 text-xl'>{t('main.learn_more')}</p>
					<Chevron class='fill-slate-100 w-14 h-14' />
				</div>
			</div>
			{/* FIXME make "about" stuff later <div class='flex flex-col gap-y-8 p-12' ref={learn}>
				<div class='flex justify-around gap-x-16 relative'>
					<div class='w-1/2 flex flex-col gap-y-4'>
						<p class={`font-extrabold text-transparent text-2xl bg-clip-text ${gradient()}`}>Title one</p>
						<p class='text-justify'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci enim perspiciatis
							officia natus commodi doloribus. Ea ex architecto ad, delectus distinctio inventore dolore
							quia. Repellendus accusamus eius, non, iusto autem hic magni fugit nihil quibusdam possimus
							laborum quasi vel corporis dolorem architecto nostrum tempora animi obcaecati reprehenderit
							aspernatur dignissimos in, quaerat iure. Amet quod adipisci, quidem delectus maiores alias!
						</p>
					</div>
					<div class='w-1/2 flex flex-col gap-y-10 justify-center items-center'>
						<div class='animate-spin-right pt-2'>
							<Icon class='w-16 h-16 animate-spin-left' />
						</div>
						<div class='border-2 border-dashed border-slate-600 rounded-md p-6 w-full'>
							<SiArchlinux class='w-12 h-12' />
						</div>
					</div>
					<div class='bg-slate-100 rounded-full p-4 absolute bottom-0 right-0 m-5'>hola</div>
				</div>
			</div> */}
		</div>
	);
};

export default Home;
