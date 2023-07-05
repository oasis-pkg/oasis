import { Component, JSX } from 'solid-js';

const IconFlat: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = props => {
	return (
		<svg
			{...props}
			width='3000'
			height='3000'
			viewBox='0 0 3000 3000'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M0 2000H1000V3000H100C44.7715 3000 0 2955.23 0 2900V2000Z' />
			<path d='M1000 1000H6.10352e-05V100C6.10352e-05 44.7716 44.7716 6.10352e-05 100 6.10352e-05H1000V1000Z' />
			<rect x='2000' y='1000' width='1000' height='1000' transform='rotate(180 2000 1000)' />
			<rect x='1000' y='2000' width='1000' height='1000' transform='rotate(180 1000 2000)' />
			<rect x='1000' y='2000' width='1000' height='1000' />
			<path d='M2000 1000H3000V100C3000 44.7716 2955.23 6.10352e-05 2900 6.10352e-05H2000V1000Z' />
			<path d='M3000 2000H2000V3000H2900C2955.23 3000 3000 2955.23 3000 2900V2000Z' />
			<rect x='3000' y='2000' width='1000' height='1000' transform='rotate(180 3000 2000)' />
		</svg>
	);
};

export default IconFlat;
