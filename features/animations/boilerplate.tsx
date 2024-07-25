import { Text } from "@/components/ui/text"
import { View } from "react-native"
import {} from "react-native-reanimated"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SQUARE_SIZE = 120

function Boilerplate() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text type="title">Bouncing Square</Text>
      <View style={styles.body}>
        <Text>Placeholder</Text>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((t, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top + t.space8,
    paddingRight: rt.insets.right + t.space8,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left + t.space8,
    backgroundColor: t.colorBackground,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: SQUARE_SIZE,
    width: SQUARE_SIZE,
    borderCurve: "continuous",
    borderRadius: t.rounded4xl,
    backgroundColor: t.colorInfo,
  },
}))

export { Boilerplate }
