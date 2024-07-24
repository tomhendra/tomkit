import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function ComponentsScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text>Components</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((_t, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingRight: rt.insets.right,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left,
  },
}))
