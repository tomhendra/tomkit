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
} from "@radix-ui/colors"

const aspectRatios = {
  aspectAuto: "auto",
  aspectSquare: "1 / 1",
  aspectVideo: "16 / 9",
} as const

const containers = {
  containerXs: 320,
  containerSm: 640,
  containerMd: 768,
  containerLg: 1024,
  containerXl: 1280,
  container2xl: 1536,
} as const

const fonts = {
  fontBody: {
    regular: "SpaceMono-Regular",
  },
  fontHeading: {
    regular: "SpaceMono-Regular",
  },
  fontMonospace: {
    regular: "SpaceMono-Regular",
  },
} as const

const fontSizes = {
  fontSizeXxs: 8,
  fontSizeXs: 12,
  fontSizeSm: 14,
  fontSizeBase: 16,
  fontSizeLg: 18,
  fontSizeXl: 20,
  fontSize2xl: 24,
  fontSize3xl: 30,
  fontSize4xl: 36,
  fontSize5xl: 48,
  fontSize6xl: 60,
  fontSize7xl: 72,
  fontSize8xl: 96,
  fontSize9xl: 128,
} as const

const fontWeights = {
  fontWeightThin: 100,
  fontWeightExtralight: 200,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  fontWeightExtrabold: 800,
  fontWeightBlack: 900,
} as const

const letterSpacings = {
  letterSpacingTighter: -0.5,
  letterSpacingTight: -0.25,
  letterSpacingNormal: 0,
  letterSpacingWide: 0.25,
  letterSpacingWider: 0.5,
  letterSpacingWidest: 1,
} as const

const lineHeights = {
  lineHeight3: 12,
  lineHeight4: 16,
  lineHeight5: 20,
  lineHeight6: 24,
  lineHeight7: 28,
  lineHeight8: 32,
  lineHeight9: 36,
  lineHeight10: 40,
} as const

const opacities = {
  opacity0: 0,
  opacity5: 0.05,
  opacity10: 0.1,
  opacity15: 0.15,
  opacity20: 0.2,
  opacity25: 0.25,
  opacity30: 0.3,
  opacity35: 0.35,
  opacity40: 0.4,
  opacity45: 0.45,
  opacity50: 0.5,
  opacity55: 0.55,
  opacity60: 0.6,
  opacity65: 0.65,
  opacity70: 0.7,
  opacity75: 0.75,
  opacity80: 0.8,
  opacity85: 0.85,
  opacity90: 0.9,
  opacity95: 0.95,
  opacity100: 100,
} as const

const radii = {
  roundedNone: 0,
  roundedSm: 2,
  rounded: 4,
  roundedMd: 6,
  roundedLg: 8,
  roundedXl: 12,
  rounded2xl: 16,
  rounded3xl: 24,
  roundedFull: 9999,
} as const

const shadows = {
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  shadowXl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  shadow2xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
} as const

const sizes = {
  size0: 0,
  sizePx: 1,
  size2px: 2,
  size1: 4,
  size2: 8,
  size3: 12,
  size4: 16,
  size5: 20,
  size6: 24,
  size7: 28,
  size8: 32,
  size9: 36,
  size10: 40,
  size11: 44,
  size12: 48,
  size14: 56,
  size16: 64,
  size20: 80,
  size24: 96,
  size28: 112,
  size32: 128,
  size36: 144,
  size40: 160,
  size44: 176,
  size48: 192,
  size52: 208,
  size56: 224,
  size60: 240,
  size64: 256,
  size72: 288,
  size80: 320,
  size96: 384,
} as const

const spaces = {
  space0: 0,
  spacePx: 1,
  space2px: 2,
  space1: 4,
  space2: 8,
  space3: 12,
  space4: 16,
  space5: 20,
  space6: 24,
  space7: 28,
  space8: 32,
  space9: 36,
  space10: 40,
  space11: 44,
  space12: 48,
  space14: 56,
  space16: 64,
  space20: 80,
  space24: 96,
  space28: 112,
  space32: 128,
  space36: 144,
  space40: 160,
  space44: 176,
  space48: 192,
  space52: 208,
  space56: 224,
  space60: 240,
  space64: 256,
  space72: 288,
  space80: 320,
  space96: 384,
} as const

const transitions = {
  // TODO transitions with Reanimated
} as const

const zIndices = {
  zIndex0: 0,
  zIndex10: 10,
  zIndex20: 20,
  zIndex30: 30,
  zIndex40: 40,
  zIndex50: 50,
} as const

const base = {
  ...aspectRatios,
  ...containers,
  ...fonts,
  ...fontSizes,
  ...fontWeights,
  ...letterSpacings,
  ...lineHeights,
  ...opacities,
  ...radii,
  ...shadows,
  ...sizes,
  ...spaces,
  ...transitions,
  ...zIndices,
}

const utils = {
  debugPink: {
    borderStyle: "solid",
    borderColor: "#ff69b4",
    borderWidth: 1,
  },
  debugBlue: {
    borderStyle: "solid",
    borderColor: "#00FFFF",
    borderWidth: 1,
  },
  debugGreen: {
    borderStyle: "solid",
    borderColor: "#00FF00",
    borderWidth: 1,
  },
} as const

export const lightTheme = {
  ...base,
  ...utils,
  colorBackground: gray.gray1,
  colorForeground: gray.gray12,
  colorInverse: gray.gray12,
  colorInverseForeground: gray.gray1,
  colorMuted: gray.gray3,
  colorMutedForeground: gray.gray5,
  colorPopover: gray.gray1,
  colorPopoverForeground: gray.gray12,
  colorCard: gray.gray1,
  colorCardForeground: gray.gray12,
  colorPrimary: gray.gray12,
  colorPrimaryForeground: gray,
  colorSecondary: gray.gray3,
  colorSecondaryForeground: gray.gray11,
  colorAccent: gray.gray3,
  colorAccentForeground: gray.gray11,
  colorDestructive: red.red5,
  colorDestructiveForeground: gray.gray5,
  colorSuccess: green.green5,
  colorSuccessForeground: green.green1,
  colorWarning: yellow.yellow5,
  colorWarningForeground: yellow.yellow1,
  colorBorder: gray.gray6,
  colorInput: gray.gray6,
  colorRing: gray.gray12,
  colorOutline: blue.blue4,
} as const

export const darkTheme = {
  ...base,
  ...utils,
  colorBackground: grayDark.gray1,
  colorForeground: grayDark.gray12,
  colorInverse: grayDark.gray12,
  colorInverseForeground: grayDark.gray1,
  colorMuted: grayDark.gray3,
  colorMutedForeground: grayDark.gray5,
  colorPopover: grayDark.gray1,
  colorPopoverForeground: grayDark.gray12,
  colorCard: grayDark.gray1,
  colorCardForeground: grayDark.gray12,
  colorPrimary: grayDark.gray11,
  colorPrimaryForeground: gray,
  colorSecondary: grayDark.gray3,
  colorSecondaryForeground: grayDark.gray11,
  colorAccent: grayDark.gray3,
  colorAccentForeground: grayDark.gray11,
  colorDestructive: redDark.red5,
  colorDestructiveForeground: grayDark.gray5,
  colorSuccess: greenDark.green5,
  colorSuccessForeground: greenDark.green1,
  colorWarning: yellowDark.yellow5,
  colorWarningForeground: yellowDark.yellow1,
  colorBorder: grayDark.gray6,
  colorInput: grayDark.gray6,
  colorRing: grayDark.gray12,
  colorOutline: blueDark.blue4,
} as const
