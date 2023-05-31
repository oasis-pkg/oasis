import { Component, JSX } from 'solid-js';

const Icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = props => {
	return (
		<svg
			{...props}
			width='2000'
			height='2000'
			viewBox='0 0 2000 2000'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect y='1333.33' width='666.667' height='666.667' fill='url(#paint0_linear_230_190)' />
			<rect
				x='666.667'
				y='666.666'
				width='666.667'
				height='666.667'
				transform='rotate(-180 666.667 666.666)'
				fill='url(#paint1_linear_230_190)'
			/>
			<rect
				x='1333.33'
				y='666.666'
				width='666.667'
				height='666.667'
				transform='rotate(180 1333.33 666.666)'
				fill='url(#paint2_linear_230_190)'
			/>
			<rect
				x='666.667'
				y='1333.33'
				width='666.667'
				height='666.667'
				transform='rotate(-180 666.667 1333.33)'
				fill='url(#paint3_linear_230_190)'
			/>
			<rect x='666.667' y='1333.33' width='666.667' height='666.667' fill='url(#paint4_linear_230_190)' />
			<rect
				width='666.667'
				height='666.667'
				transform='matrix(1 0 0 -1 1333.33 666.666)'
				fill='url(#paint5_linear_230_190)'
			/>
			<rect
				width='666.667'
				height='666.667'
				transform='matrix(-1 0 0 1 2000 1333.33)'
				fill='url(#paint6_linear_230_190)'
			/>
			<rect
				x='2000'
				y='1333.33'
				width='666.667'
				height='666.667'
				transform='rotate(-180 2000 1333.33)'
				fill='url(#paint7_linear_230_190)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_230_190'
					x1='666.667'
					y1='1333.33'
					x2='3.97364e-05'
					y2='2000'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#EAB308' />
					<stop offset='1' stop-color='#FB923C' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_230_190'
					x1='1333.33'
					y1='666.666'
					x2='666.667'
					y2='1333.33'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#D946EF' />
					<stop offset='1' stop-color='#F43F5E' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_230_190'
					x1='2000'
					y1='666.666'
					x2='1333.33'
					y2='1333.33'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#3B82F6' />
					<stop offset='1' stop-color='#9333EA' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_230_190'
					x1='1333.33'
					y1='1333.33'
					x2='666.667'
					y2='2000'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#6366F1' />
					<stop offset='1' stop-color='#38BDF8' />
				</linearGradient>
				<linearGradient
					id='paint4_linear_230_190'
					x1='1333.33'
					y1='1333.33'
					x2='666.667'
					y2='2000'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#4ADE80' />
					<stop offset='1' stop-color='#0D9488' />
				</linearGradient>
				<linearGradient
					id='paint5_linear_230_190'
					x1='666.667'
					y1='-3.97364e-05'
					x2='3.97364e-05'
					y2='666.667'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#6366F1' />
					<stop offset='1' stop-color='#38BDF8' />
				</linearGradient>
				<linearGradient
					id='paint6_linear_230_190'
					x1='666.667'
					y1='-3.97364e-05'
					x2='3.97364e-05'
					y2='666.667'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#3B82F6' />
					<stop offset='1' stop-color='#9333EA' />
				</linearGradient>
				<linearGradient
					id='paint7_linear_230_190'
					x1='2666.67'
					y1='1333.33'
					x2='2000'
					y2='2000'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#D946EF' />
					<stop offset='1' stop-color='#F43F5E' />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Icon;
