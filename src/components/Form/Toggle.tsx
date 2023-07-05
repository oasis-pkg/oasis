import { Component, children, splitProps } from 'solid-js';
import store from '../../store';

const Toggle: Component<{ value: boolean; setter: () => void; children: string }> = props => {
	let c = children(() => props.children);
	let [p] = splitProps(props, ['setter', 'value']);

	return (
		<div
			class='flex gap-3'
			onClick={() => {
				p.setter();
			}}>
			<div
				class={`w-12 ring-2 ring-slate-300 rounded-full p-1 relative ${
					p.value ? store.get.gradient : 'bg-slate-500'
				}`}>
				<div
					class={`absolute w-4 h-4 rounded-full shadow-md bg-slate-50 ${
						p.value ? 'right-1' : 'left-1'
					}`}></div>
			</div>
			<p>{c()}</p>
		</div>
	);
	/* return (
		<label for='toggle'>
			<input  id='toggle' type='checkbox' class='hidden peer' />
			<span class='flex gap-3'>
				<span class='w-12 ring-2 ring-slate-300 rounded-full p-1 relative'>
					<span class='absolute w-4 h-4 rounded-full shadow-md bg-slate-50 left-1 peer-checked:left-9'></span>
				</span>
				<span class='peer-checked:bg-black'>{c()}</span>
			</span>
		</label>
	); */
};

export default Toggle;
