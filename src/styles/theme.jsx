import { css } from 'styled-components';

// setup responsive breakpoints

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

// setup fonts

<<<<<<< HEAD:src/assets/styles/theme.jsx
export const fontFamilyNormal = "'Dosis',sans-serif";
export const fontFamilyFeature = "'Fira Sans', ,sans-serif";
export const fontFamilyNavBar = "'Nunito',sans-serif";
=======
export const fontFamilyNormal = "'Roboto','Dosis',sans-serif";
export const fontFamilyFeature = "'Roboto','Fira Sans',sans-serif";
export const fontFamilyNavBar = "'Roboto','Nunito',sans-serif";
>>>>>>> 93f67938b2025c6f3349f9f680d8fa251abbfffa:src/styles/theme.jsx

export const fontWeightNormal = 400;
export const fontWeightBold = 700;
const mainTextColor = '#005aff';

const theme = {
  // fonts
<<<<<<< HEAD:src/assets/styles/theme.jsx
  fontFamilyNormal: "'Dosis',sans-serif",
  fontFamilyFeature: "'Fira Sans', ,sans-serif",
  fontFamilyNavBar: "'Nunito',sans-serif",
=======

  fontFamilyNormal: "'Roboto','Dosis',sans-serif",
  fontFamilyFeature: "'Roboto','Fira Sans',sans-serif",
  fontFamilyNavBar: "'Roboto','Nunito',sans-serif",

  // fonts weight
  fontWeightFeature: 700,
>>>>>>> 93f67938b2025c6f3349f9f680d8fa251abbfffa:src/styles/theme.jsx

  // color
  blueFeatureColor: '#005aff',
  secondaryFeatureColor: '#fff',
  lightGreyFeatureColor: '#ebebeb',
  greyFeatureColor: '#e5e5e5',
  darkGreyFeatureColor: '#1d1d1d',
<<<<<<< HEAD:src/assets/styles/theme.jsx
  yellowFeatureColor: '#feca5a',
=======
  darkBlueGreyFeatureColor: '#2f4f4f',
  yellowFeatureColor: '#feca5a',
  NavyBlueFeatureColor: '#000080',
>>>>>>> 93f67938b2025c6f3349f9f680d8fa251abbfffa:src/styles/theme.jsx

  // lines
  lineHeight: 1.5,
  smallLineHeight: 1.15,

  mainFont: css`
    font-family: ${fontFamilyNormal};
    font-size: 1rem;
    color: ${mainTextColor};
  `,

  textBlockFont: css`
    font-family: ${fontFamilyFeature};
    font-weight: ${fontWeightBold};
  `,
};

export default theme;
