import { darkTheme, lightTheme } from "./theme"
// native UI colours
export const NAV_THEME = {
  light: {
    background: lightTheme.colorBackground,
    border: lightTheme.colorBorder,
    card: lightTheme.colorCard,
    notification: lightTheme.colorDestructive,
    primary: lightTheme.colorPrimary,
    text: lightTheme.colorForeground,
  },
  dark: {
    background: darkTheme.colorBackground,
    border: darkTheme.colorBorder,
    card: darkTheme.colorCard,
    notification: darkTheme.colorDestructive,
    primary: darkTheme.colorPrimary,
    text: darkTheme.colorForeground,
  },
}
