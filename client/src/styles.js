import { css } from 'styled-components/macro';

export const setColor = {
	primaryText: '#222',
	bkgnd_light: '#ffffe3',
	bkgnd_dark: '#ffffba',

	greyLight_1: '#faf9f9',
	greyLight_2: '#f4f2f2',
	greyLight_3: '#f0eeee',
	greyLight_4: '#ccc',

	greyDark_1: '#333',
	greyDark_2: '#777',
	greyDark_3: '#999'
};

export const setFont = {
	primary: "font-family: 'Lato', serif;",
	secondary: "font-family: 'Roboto', sans-serif;",
	tertiary: "font-family: 'Open Sans', sans-serif;"
};

export const screenWidth = {
	large: 1200,
	desktop: 1024,
	tablet: 768,
	phablet: 480,
	phone: 320
};

// Iterate through the sizes and create a media template
export const media = Object.keys(screenWidth).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${screenWidth[label] / 10}em) {
			${css(...args)};
		}
	`;
	return acc;
}, {});

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
	return `display:flex;align-items:${y};justify-content:${x}`;
};

export const clearFix = css`
	&::after {
		content: "";
		display: table;
		clear: both;
	}
`;

export const absCenter = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate()(-50%, -50%);
`;

export const centerText = css`
	margin: 0 auto;
	text-align: center;
`;
