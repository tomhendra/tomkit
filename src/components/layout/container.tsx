import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function Container({ children }: { children: React.ReactNode }) {
  return <View style={styles.wrapper}>{children}</View>
}

export { Container }

const styles = StyleSheet.create((t, rt) => ({
  wrapper: {
    flex: 1,
    paddingTop: t.space8,
    paddingRight: rt.insets.right + t.space8,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left + t.space8,
    backgroundColor: t.colorBackground,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
