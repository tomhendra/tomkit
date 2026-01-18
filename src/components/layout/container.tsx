import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function Container({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

export { Container }

const styles = StyleSheet.create((t, rt) => ({
  container: {
    flex: 1,
    paddingTop: t.space(8),
    paddingRight: rt.insets.right + t.space(8),
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left + t.space(8),
    backgroundColor: t.color.background,
  },
}))
