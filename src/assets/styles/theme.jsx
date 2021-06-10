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

export const fontFamilyNormal = "'Dosis',sans-serif";
export const fontFamilyFeature = "'Fira Sans', ,sans-serif";
export const fontFamilyNavBar = "'Nunito',sans-serif";

export const fontWeightNormal = 400;
export const fontWeightBold = 700;
const mainTextColor = '005aff';

const theme = {
  // fonts
  fontFamilyNormal: "'Dosis',sans-serif",
  fontFamilyFeature: "'Fira Sans', ,sans-serif",
  fontFamilyNavBar: "'Nunito',sans-serif",

  // color
  blueFeatureColor: '#005aff',
  secondaryFeatureColor: '#fff',
  lightGreyFeatureColor: '#ebebeb',
  greyFeatureColor: '#e5e5e5',
  darkGreyFeatureColor: '#1d1d1d',
  yellowFeatureColor: '#feca5a',

  // lines
  lineHeight: 1.5,
  smallLineHeight: 1.15,

  mainFont: css`
    font-family: ${fontFamilyNormal};
    font-size: 1rem;
    color: ${mainTextColor};
  `,
};

export default theme;
