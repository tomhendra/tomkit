import { darkTheme, lightTheme } from "./theme"
// native UI colours
export const NAV_THEME = {
  light: {
    background: lightTheme.colors.background,
    border: lightTheme.colors.border,
    card: lightTheme.colors.card,
    notification: lightTheme.colors.destructive,
    primary: lightTheme.colors.primary,
    text: lightTheme.colors.foreground,
  },
  dark: {
    background: darkTheme.colors.background,
    border: darkTheme.colors.border,
    card: darkTheme.colors.card,
    notification: darkTheme.colors.destructive,
    primary: darkTheme.colors.primary,
    text: darkTheme.colors.foreground,
  },
}
