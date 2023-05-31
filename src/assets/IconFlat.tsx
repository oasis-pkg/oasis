import { Component, JSX } from 'solid-js';

const IconFlat: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = props => {
	return (
		<svg
			{...props}
			width='2000'
			height='2001'
			viewBox='0 0 2000 2000'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect y='1333.33' width='666.667' height='666.667' />
			<rect x='666.667' y='666.666' width='666.667' height='666.667' transform='rotate(180 666.667 666.666)' />
			<rect x='1333.33' y='666.666' width='666.667' height='666.667' transform='rotate(180 1333.33 666.666)' />
			<rect x='666.667' y='1333.33' width='666.667' height='666.667' transform='rotate(180 666.667 1333.33)' />
			<rect x='666.667' y='1333.33' width='666.667' height='666.667' />
			<rect width='666.667' height='666.667' transform='matrix(1 0 0 -1 1333.33 666.666)' />
			<rect width='666.667' height='666.667' transform='matrix(-1 0 0 1 2000 1333.33)' />
			<rect x='2000' y='1333.33' width='666.667' height='666.667' transform='rotate(180 2000 1333.33)' />
		</svg>
	);
};

export default IconFlat;
