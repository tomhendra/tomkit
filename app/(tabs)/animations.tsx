import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function AnimationsScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text>Animations</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((_, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingRight: rt.insets.right,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left,
  },
}))
