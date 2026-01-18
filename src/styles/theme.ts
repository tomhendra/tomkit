import { Theme } from '@react-navigation/native'
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
} from '@radix-ui/colors'

// Raw color palette from Radix
const colors = {
  white: '#ffffff',
  black: '#000000',
  gray,
  grayDark,
  blue,
  blueDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
}

const typography = {
  font: {
    thin: 'Inter-Thin', // 100
    extraLight: 'Inter-ExtraLight', // 200
    light: 'Inter-Light', // 300
    regular: 'Inter-Regular', // 400
    medium: 'Inter-Medium', // 500
    semibold: 'Inter-SemiBold', // 600
    bold: 'Inter-Bold', // 700
    extraBold: 'Inter-ExtraBold', // 800
    black: 'Inter-Black', // 900
    // Italic variants
    thinItalic: 'Inter-ThinItalic',
    extraLightItalic: 'Inter-ExtraLightItalic',
    lightItalic: 'Inter-LightItalic',
    italic: 'Inter-Italic',
    mediumItalic: 'Inter-MediumItalic',
    semiboldItalic: 'Inter-SemiBoldItalic',
    boldItalic: 'Inter-BoldItalic',
    extraBoldItalic: 'Inter-ExtraBoldItalic',
    blackItalic: 'Inter-BlackItalic',
    // System fallbacks
    mono: 'SF Mono',
  },
  fontSize: {
    xxs: 8,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
    display: 36,
    hero: 48,
    giant: 60,
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
    widest: 1,
  },
} as const

const radius = {
  none: 0,
  sm: 2,
  base: 4,
  md: 6,
  lg: 8,
  xl: 12,
  xxl: 16,
  xxxl: 24,
  round: 32,
  full: 9999,
} as const

const shadow = {
  sm: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  base: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  xl: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  xxl: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
} as const

const container = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const

const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
} as const

const debug = {
  pink: {
    borderStyle: 'solid',
    borderColor: '#ff69b4',
    borderWidth: 1,
  },
  blue: {
    borderStyle: 'solid',
    borderColor: '#00FFFF',
    borderWidth: 1,
  },
  green: {
    borderStyle: 'solid',
    borderColor: '#00FF00',
    borderWidth: 1,
  },
} as const

const utils = {
  /** Calculate spacing: space(4) = 16px */
  space: (v: number) => v * 4,
  /** Calculate gap: gap(3) = 12px */
  gap: (v: number) => v * 4,
  /** Calculate size: size(16) = 64px */
  size: (v: number) => v * 4,
}

export const lightTheme = {
  color: {
    background: gray.gray1,
    foreground: gray.gray12,

    card: colors.white,
    cardForeground: gray.gray12,

    primary: gray.gray12,
    primaryForeground: gray.gray1,

    secondary: gray.gray3,
    secondaryForeground: gray.gray11,

    muted: gray.gray3,
    mutedForeground: gray.gray5,

    accent: gray.gray3,
    accentForeground: gray.gray11,

    destructive: red.red9,
    destructiveForeground: colors.white,

    success: green.green9,
    successForeground: colors.white,

    warning: yellow.yellow9,
    warningForeground: colors.white,

    info: blue.blue9,
    infoForeground: colors.white,

    border: gray.gray6,
    input: gray.gray6,
    ring: gray.gray12,

    inverse: gray.gray12,
    inverseForeground: gray.gray1,

    popover: gray.gray1,
    popoverForeground: gray.gray12,

    outline: blue.blue4,
  },
  ...typography,
  radius,
  shadow,
  container,
  zIndex,
  debug,
  ...utils,
}

export const darkTheme = {
  color: {
    background: colors.black,
    foreground: grayDark.gray12,

    card: grayDark.gray2,
    cardForeground: grayDark.gray12,

    primary: grayDark.gray12,
    primaryForeground: grayDark.gray1,

    secondary: grayDark.gray3,
    secondaryForeground: grayDark.gray11,

    muted: grayDark.gray3,
    mutedForeground: grayDark.gray5,

    accent: grayDark.gray3,
    accentForeground: grayDark.gray11,

    destructive: redDark.red9,
    destructiveForeground: grayDark.gray1,

    success: greenDark.green9,
    successForeground: grayDark.gray1,

    warning: yellowDark.yellow9,
    warningForeground: grayDark.gray1,

    info: blueDark.blue9,
    infoForeground: grayDark.gray1,

    border: grayDark.gray6,
    input: grayDark.gray6,
    ring: grayDark.gray12,

    inverse: grayDark.gray12,
    inverseForeground: grayDark.gray1,

    popover: grayDark.gray2,
    popoverForeground: grayDark.gray12,

    outline: blueDark.blue4,
  },
  ...typography,
  radius,
  shadow,
  container,
  zIndex,
  debug,
  ...utils,
}

// React Navigation theme integration
export const navigationThemes: { light: Theme; dark: Theme } = {
  light: {
    dark: false,
    colors: {
      primary: lightTheme.color.primary,
      background: lightTheme.color.background,
      card: lightTheme.color.card,
      text: lightTheme.color.foreground,
      border: lightTheme.color.border,
      notification: lightTheme.color.destructive,
    },
    fonts: {
      regular: {
        fontFamily: typography.font.regular,
        fontWeight: '400',
      },
      medium: {
        fontFamily: typography.font.regular,
        fontWeight: '400',
      },
      bold: {
        fontFamily: typography.font.medium,
        fontWeight: '500',
      },
      heavy: {
        fontFamily: typography.font.semibold,
        fontWeight: '600',
      },
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: darkTheme.color.primary,
      background: darkTheme.color.background,
      card: darkTheme.color.card,
      text: darkTheme.color.foreground,
      border: darkTheme.color.border,
      notification: darkTheme.color.destructive,
    },
    fonts: {
      regular: {
        fontFamily: typography.font.regular,
        fontWeight: '400',
      },
      medium: {
        fontFamily: typography.font.regular,
        fontWeight: '400',
      },
      bold: {
        fontFamily: typography.font.medium,
        fontWeight: '500',
      },
      heavy: {
        fontFamily: typography.font.semibold,
        fontWeight: '600',
      },
    },
  },
}

export { colors, typography, radius, shadow }
