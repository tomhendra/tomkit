import '@/styles/unistyles'
import 'react-native-gesture-handler'

import {
  type Theme,
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BootSplash from 'react-native-bootsplash'
import { StyleSheet } from 'react-native-unistyles'

import { NAV_THEME } from '@/styles/nav-theme'
import { RootNavigator } from '@/navigation'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
}

const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
}

export default function App() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  useEffect(() => {
    BootSplash.hide({ fade: true })
  }, [])

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer theme={isDark ? DARK_THEME : LIGHT_THEME}>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
