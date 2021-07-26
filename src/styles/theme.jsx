import { css } from 'styled-components';

// setup responsive breakpoints

export const size = {
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

export const fontFamilyNormal = "'Open Sans', sans-serif";
export const fontFamilyFeature = "'Lato', sans-serif";
export const fontFamilyNavBar = "'Roboto Mono', monospace, sans serif";

export const fontWeightNormal = 400;
export const fontWeightBold = 700;
const mainTextColor = '#3566d6';
const secondaryTextColor = '#0a40a2';

const theme = {
  // fonts

  fontFamilyNormal: "'Open Sans', sans-serif",
  fontFamilyFeature: "'Lato', sans-serif",
  fontFamilyNavBar: "'Roboto Mono', monospace, sans serif",

  // fonts size

  // fonts weight
  fontWeightFeature: 700,

  // color
  blueFeatureColor: '#3566d6',
  secondaryFeatureColor: '#fff',
  lightGreyFeatureColor: '#ebebeb',
  greyFeatureColor: '#e5e5e5',
  darkGreyFeatureColor: '#1d1d1d',
  darkBlueGreyFeatureColor: '#2f4f4f',
  yellowFeatureColor: '#feca5a',
  NavyBlueFeatureColor: '#08378c',
  blackFeatureColor: '#000000',
  whiteFeatureColor: '#e7ecf4',
  greycendreColor: '#706B69',
  secondaryTextColor,

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

  titleFont: css`
    font-family: ${fontFamilyNormal};
    font-weight: ${fontWeightNormal};
    color: ${mainTextColor};
  `,
};

export default theme;
