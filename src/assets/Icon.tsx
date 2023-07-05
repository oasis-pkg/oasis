import { Component, JSX } from 'solid-js';

const Icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = props => {
	return (
		<svg
			{...props}
			width='3000'
			height='3000'
			viewBox='0 0 3000 3000'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M0 2000H1000V3000H100C44.7715 3000 0 2955.23 0 2900V2000Z' fill='url(#paint0_linear_305_130)' />
			<path
				d='M1000 1000H6.10352e-05V100C6.10352e-05 44.7716 44.7716 6.10352e-05 100 6.10352e-05H1000V1000Z'
				fill='url(#paint1_linear_305_130)'
			/>
			<rect
				x='2000'
				y='1000'
				width='1000'
				height='1000'
				transform='rotate(180 2000 1000)'
				fill='url(#paint2_linear_305_130)'
			/>
			<rect
				x='1000'
				y='2000'
				width='1000'
				height='1000'
				transform='rotate(180 1000 2000)'
				fill='url(#paint3_linear_305_130)'
			/>
			<rect x='1000' y='2000' width='1000' height='1000' fill='url(#paint4_linear_305_130)' />
			<path
				d='M2000 1000H3000V100C3000 44.7716 2955.23 6.10352e-05 2900 6.10352e-05H2000V1000Z'
				fill='url(#paint5_linear_305_130)'
			/>
			<path
				d='M3000 2000H2000V3000H2900C2955.23 3000 3000 2955.23 3000 2900V2000Z'
				fill='url(#paint6_linear_305_130)'
			/>
			<rect
				x='3000'
				y='2000'
				width='1000'
				height='1000'
				transform='rotate(180 3000 2000)'
				fill='url(#paint7_linear_305_130)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_305_130'
					x1='1000'
					y1='2000'
					x2='5.96046e-05'
					y2='3000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#EAB308' />
					<stop offset='1' stop-color='#FB923C' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_305_130'
					x1='0.00012064'
					y1='1000'
					x2='1000'
					y2='6.10352e-05'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#D946EF' />
					<stop offset='1' stop-color='#F43F5E' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_305_130'
					x1='3000'
					y1='1000'
					x2='2000'
					y2='2000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#3B82F6' />
					<stop offset='1' stop-color='#9333EA' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_305_130'
					x1='2000'
					y1='2000'
					x2='1000'
					y2='3000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#6366F1' />
					<stop offset='1' stop-color='#38BDF8' />
				</linearGradient>
				<linearGradient
					id='paint4_linear_305_130'
					x1='2000'
					y1='2000'
					x2='1000'
					y2='3000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#4ADE80' />
					<stop offset='1' stop-color='#0D9488' />
				</linearGradient>
				<linearGradient
					id='paint5_linear_305_130'
					x1='3000'
					y1='1000'
					x2='2000'
					y2='6.10352e-05'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#6366F1' />
					<stop offset='1' stop-color='#38BDF8' />
				</linearGradient>
				<linearGradient
					id='paint6_linear_305_130'
					x1='2000'
					y1='2000'
					x2='3000'
					y2='3000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#3B82F6' />
					<stop offset='1' stop-color='#9333EA' />
				</linearGradient>
				<linearGradient
					id='paint7_linear_305_130'
					x1='4000'
					y1='2000'
					x2='3000'
					y2='3000'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#D946EF' />
					<stop offset='1' stop-color='#F43F5E' />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Icon;
