const breakpoints = [1050].map(n => `${n}px`);

const images = {
  logos: {},
};

export const space = {
  0: 0,
  4: 4,
  6: 6,
  8: 8,
  9: 9,
  10: 10,
  12: 12,
  13: 13,
  14: 14,
  16: 16,
  20: 20,
  22: 22,
  24: 24,
  26: 26,
  28: 28,
  30: 30,
  32: 32,
  34: 34,
  36: 36,
  38: 38,
  45: 45,
  52: 52,
};

export const radii = [0, 3, 4, 5, 6];

export const fontSizes = {
  12: 12,
  13: 13,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const darkBlue = [
  '#0A1A26', // 0
  '#0C202E', // 1
  '#142836', // 2
  '#1F313E', // 3
  '#263845', // 4
  '#32434E', // 5 // used in toggle
  // '#152632', // used as bg in sign up, complete registration and forgot password pages
  '#162938', // 6 used as bg in change password, send code, change phone, change email modals
  '#273946', // 7 used for icon infoTriangle
  '#142735', // 8
  '#091822', // 9
];

const grey = [
  'rgba(255, 255, 255, 0.06)', // 0
  '#79838A', // 1
  '#D3DBE0', // 2
  'rgba(121, 131, 138, 0.5)', // 3
  '#C4C4C4', // 4
];

const blue = '#2D94F3';
const coral = '#40ACAD';
const lightCyan = '#4cc1c2';
const orange = '#FF9900';
const green = '#2FC265';
const deepGreen = '#198a07';
const red = '#D1193E';
const white = '#ffffff';
const black = '#000000';
const transparent = 'transparent';
const redTransparent = 'rgba(209, 25, 62, .3)';
const orangeGradient = 'linear-gradient(283.44deg, #FCA501 0%, #F76F1A 100%)';
const coralGradient = 'linear-gradient(283.44deg, #66C8CA 0%, #529CB4 100%)';
const coralYellowGreenGradient = 'linear-gradient(270deg, #198a07 0%, #cce52d 40%, #4cc1c2 80%)';
const coralGreenGradient = 'linear-gradient(270deg, #198A07 0%, #4CC1C2 80.4%)';
const orangeGreenGradient = 'linear-gradient(270deg, #198A07 0%,#FF9900 80.4%);';
const darkOrange = 'rgb(114, 86, 23)';
const lightCoral = '#66C8CA';
const orangeTransparent = 'rgba(255, 153, 0, 0.25)';
const coralTransparent = [
  'rgb(64, 172, 173, 0.25)', //  0
];
const yellow = '#D6AA54';
const blueGradient = 'linear-gradient(to top, #051937, #064268, #007099, #00a2c5, #12d6eb);';

const palette = {
  darkBlue,
  grey,
  blue,
  coral,
  lightCyan,
  orange,
  green,
  deepGreen,
  red,
  white,
  black,
  transparent,
  redTransparent,
  orangeGradient,
  coralGradient,
  darkOrange,
  lightCoral,
  orangeTransparent,
  coralTransparent,
  coralYellowGreenGradient,
  coralGreenGradient,
  orangeGreenGradient,
  yellow,
  blueGradient,
};

export const colors = {
  modes: {
    dark: {
      backgroundPrimary: palette.darkBlue[1],
      backgroundSecondary: palette.darkBlue[2],
      backgroundThird: palette.darkBlue[4],
      backgroundFourth: palette.darkBlue[3],
      backgroundFive: palette.darkBlue[6],
      backgroundSix: palette.darkBlue[8],
      backgroundSeven: palette.darkBlue[9],
      backgroundEight: palette.orangeGreenGradient,
      backgroundDefault: palette.darkBlue[0],
      backgroundTriGradient: palette.coralYellowGreenGradient,
      backgroundCold: palette.orange,
      backgroundWarm: palette.deepGreen,
      borderPrimary: palette.orange,
      borderSecondary: palette.orange,
      borderThird: palette.darkBlue[5],
      borderFourth: palette.grey[3],
      borderFifth: palette.orangeTransparent,
      borderDefault: palette.grey[1],
      error: palette.red,
      active: palette.orange,
      textPrimary: palette.grey[1],
      textSecondary: palette.white,
      textDefault: palette.grey[2],
      accentPrimary: palette.orange,
      accentSecondary: palette.red,
      accentThird: palette.grey[0],
      accentFourth: palette.orange,
      accentDefault: palette.green,
      iconsPrimary: palette.darkBlue[5],
      iconsSecondary: palette.darkBlue[7],
      iconsDefault: palette.grey[1],
      scrollBarThumb: palette.grey[1],
      errorTransparent: palette.redTransparent,
      gradientDefault: palette.orangeGradient,
      lineGrid: palette.darkOrange,
      accentTransparent: palette.orangeTransparent,
    },
    light: {
      backgroundPrimary: 'orange',
      backgroundSecondary: 'lightblue',
      backgroundThird: 'purple',
      accentSecondary: 'pink',
    },
  },
  default: ['red'],
  ...palette,
};

export const buttonSizes = {
  small: {
    fontSize: fontSizes[2],
    width: '140px',
  },
  medium: {
    fontSize: fontSizes[3],
    width: '192px',
  },
  large: {
    fontSize: fontSizes[3],
    width: '220px',
  },
};

export const baseTheme = {
  images,
  space,
  radii,
  fontSizes,
  colors,
  buttonSizes,
  breakpoints,
  fontWeights,
};
