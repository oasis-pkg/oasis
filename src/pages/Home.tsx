import { Component } from 'solid-js';
import Icon from '../assets/Icon';
import IconFlat from '../assets/IconFlat';

/*
from-blue-500 to-purple-600
from-sky-400 to-indigo-500
from-orange-400 to-yellow-500
from-fuchsia-500 to-rose-500
from-green-400 to-teal-600

*/

const Home: Component<{}> = props => {
	return (
		<div>
			<div class='w-full h-screen relative overflow-hidden'>
				<div class='absolute -z-50 w-1/5 h-1/2 left-0 top-0 shadow-lg bg-gradient-to-bl from-blue-500 to-purple-600'></div>
				<div class='absolute -z-50 w-1/5 h-1/2 left-1/5 top-0 shadow-lg bg-gradient-to-tl from-orange-400 to-yellow-500'></div>
				<div class='absolute -z-50 w-1/5 h-1/2 left-2/5 top-0 shadow-lg bg-gradient-to-br from-sky-400 to-indigo-500'></div>
				<div class='absolute -z-50 w-1/5 h-1/2 left-3/5   top-0 shadow-lg bg-gradient-to-bl from-green-400 to-teal-600'></div>
				<div class='absolute -z-50 w-1/5 h-1/2 left-4/5 top-0 shadow-lg bg-gradient-to-tl from-fuchsia-500 to-rose-500'></div>
				<div class='flex p-4 text-slate-100'>
					<div class='flex items-center gap-x-2'>
						<IconFlat class='fill-slate-100 w-12 h-12' />
						<p class='font-bold text-xl'>Oasis</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
