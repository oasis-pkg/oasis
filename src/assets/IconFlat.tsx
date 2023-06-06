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
			<rect y='2000' width='999.999' height='999.999' />
			<rect x='1000' y='1000' width='999.999' height='999.999' transform='rotate(180 1000 1000)' />
			<rect x='2000' y='1000' width='999.999' height='999.999' transform='rotate(180 2000 1000)' />
			<rect x='1000' y='2000' width='999.999' height='999.999' transform='rotate(180 1000 2000)' />
			<rect x='1000' y='2000' width='999.999' height='999.999' />
			<rect width='999.999' height='999.999' transform='matrix(1 0 0 -1 2000 1000)' />
			<rect width='999.999' height='999.999' transform='matrix(-1 0 0 1 3000 2000)' />
			<rect x='3000' y='2000' width='999.999' height='999.999' transform='rotate(180 3000 2000)' />
		</svg>
	);
};

export default IconFlat;
