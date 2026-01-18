import '@/styles/unistyles'

import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native-unistyles'

import { RootNavigator } from '@/navigation'
import { navigationThemes } from '@/styles/theme'

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
      <NavigationContainer
        theme={isDark ? navigationThemes.dark : navigationThemes.light}
      >
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
