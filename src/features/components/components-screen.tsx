import { Text } from '@/components/ui/text'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function ComponentsScreen() {
  return (
    <View style={styles.container}>
      <Text type="title">Components</Text>
    </View>
  )
}

const styles = StyleSheet.create((t, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top + t.space8,
    paddingRight: rt.insets.right + t.space8,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left + t.space8,
    backgroundColor: t.colorBackground,
  },
}))

export { ComponentsScreen }
