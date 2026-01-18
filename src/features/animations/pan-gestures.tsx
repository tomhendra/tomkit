import { Text } from '@/components/ui/text'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const SQUARE_SIZE = 120

function PanGestures() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Pan gestures</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create((t, rt) => ({
  wrapper: {
    flex: 1,
    paddingTop: rt.insets.top + t.space8,
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
  square: {
    height: SQUARE_SIZE,
    width: SQUARE_SIZE,
    backgroundColor: t.colorInfo,
    borderCurve: 'continuous',
    borderRadius: t.rounded4xl,
  },
}))

export { PanGestures }
