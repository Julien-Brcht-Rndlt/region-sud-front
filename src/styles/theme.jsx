import styled from 'styled-components';

const fontWeightNormal = 400;
const fontFamilyNormal = "'Dosis',sans-serif'";
const fontWeightLogo = 400;
const fontFamilyLogo = "'Nunito',sans-serif'";
const fontWeightFeature = 700;
const fontFamilyFeature = "'Fira Sans, ,sans-serif'";
const mainTextColor = '#000';
const fontSize = '62.5%';

// setup default theme

const theme = {
  // fonts theme
  fonts: {
    fontWeightNormal,
    fontFamilyNormal,
    fontWeightLogo,
    fontFamilyLogo,
    fontWeightFeature,
    fontFamilyFeature,
    mainTextColor,
    fontSize,
  },
  // colors theme
  colors: {
    blueRegionSud: '005aff',
    whiteRegionSud: 'ffffff',
    yellowRegionSud: 'feca5a',
    lightGreyRegionsud: 'ebebeb',
    greyRegionsud: 'e5e5e5',
    darkGreyRegionsud: '1d1d1d',
  },
  //
  lineHeight: 1.15, // 1.5
};

export default theme;

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

export const Flex = styled.div`
  display: flex;
`;
