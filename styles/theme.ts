import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";

import { UnistylesRegistry } from "react-native-unistyles";

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  superLarge: 2000,
  tvLike: 4000,
} as const;

export const base = {
  aspectRatio: {
    auto: "auto", // TODO check for RN
    square: "1 / 1",
    video: "16 / 9",
  },
  borders: {},
  borderStyles: {},
  borderWidths: {},
  container: {},
  fonts: {
    body: {},
    heading: {},
    monospace: {},
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 900,
  },
  letterSpacings: {},
  lineHeights: {
    body: {},
    heading: {},
  },
  opacities: {},
  radii: {},
  shadows: {},
  sizes: {},
  space: {
    0: 0,
    px: 1,
    0.5: 0.5,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },
  transitions: {},
  zIndices: {},
} as const;

export const lightTheme = {
  ...base,
  colors: {
    background: gray.gray1,
    foreground: gray.gray12,
    inverse: gray.gray12,
    inverseForeground: gray.gray1,
    muted: gray.gray3,
    mutedForeground: gray.gray5,
    popover: gray.gray1,
    popoverForeground: gray.gray12,
    card: gray.gray1,
    cardForeground: gray.gray12,
    primary: gray.gray12,
    primaryForeground: gray,
    secondary: gray.gray3,
    secondaryForeground: gray.gray11,
    accent: gray.gray3,
    accentForeground: gray.gray11,
    destructive: red.red5,
    destructiveForeground: gray.gray5,
    success: green.green5,
    successForeground: green.green1,
    warning: yellow.yellow5,
    warningForeground: yellow.yellow1,
    border: gray.gray6,
    input: gray.gray6,
    ring: gray.gray12,
    outline: blue.blue4,
  },
} as const;

export const darkTheme = {
  ...base,
  colors: {
    background: grayDark.gray1,
    foreground: grayDark.gray12,
    inverse: grayDark.gray12,
    inverseForeground: grayDark.gray1,
    muted: grayDark.gray3,
    mutedForeground: grayDark.gray5,
    popover: grayDark.gray1,
    popoverForeground: grayDark.gray12,
    card: grayDark.gray1,
    cardForeground: grayDark.gray12,
    primary: grayDark.gray11,
    primaryForeground: gray,
    secondary: grayDark.gray3,
    secondaryForeground: grayDark.gray11,
    accent: grayDark.gray3,
    accentForeground: grayDark.gray11,
    destructive: redDark.red5,
    destructiveForeground: grayDark.gray5,
    success: greenDark.green5,
    successForeground: greenDark.green1,
    warning: yellowDark.yellow5,
    warningForeground: yellowDark.yellow1,
    border: grayDark.gray6,
    input: grayDark.gray6,
    ring: grayDark.gray12,
    outline: blueDark.blue4,
  },
} as const;

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
