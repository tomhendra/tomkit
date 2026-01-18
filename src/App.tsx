import '@/styles/unistyles'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BootSplash from 'react-native-bootsplash'
import { StyleSheet } from 'react-native-unistyles'

import { navigationThemes } from '@/styles/theme'
import { RootNavigator } from '@/navigation'


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
      <NavigationContainer theme={isDark ? navigationThemes.dark : navigationThemes.light}>
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
