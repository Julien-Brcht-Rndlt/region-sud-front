const fontWeightNormal = 400;
const fontFamilyNormal = "'Dosis',sans-serif'";
const fontWeightLogo = 400;
const fontFamilyLogo = "'Nunito',sans-serif'";
const fontWeightFeature = 700;
const fontFamilyFeature = 'Fira Sans';
const mainTextColor = '#000';

// setup default theme

export const theme = {
  // fonts theme
  fonts: {
    fontWeightNormal,
    fontFamilyNormal,
    fontWeightLogo,
    fontFamilyLogo,
    fontWeightFeature,
    fontFamilyFeature,
    mainTextColor,
  },
  // colors theme
  colors: {
    blueRegionSud: '005aff',
    whiteRegionSud: 'ffffff',
    yellowRegionSud: 'feca5a',
  },
};

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
