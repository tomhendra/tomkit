import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function TextScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container} />
    </View>
  )
}

export { TextScreen }

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
