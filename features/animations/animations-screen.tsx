import { Text } from "@/components/ui/text"
import { View } from "react-native"
import {} from "react-native-reanimated"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { BouncingSquare } from "./bouncing-square"

const SQUARE_SIZE = 120

function AnimationsScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text type="title">Animations</Text>
      <View style={styles.body}>
        <BouncingSquare />
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
    backgroundColor: t.colorInfo,
    borderCurve: "continuous",
    borderRadius: t.rounded4xl,
  },
  button: {
    height: t.size16,
    width: t.size16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: t.colorPrimary,
    borderRadius: t.rounded4xl,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  buttonText: {
    color: t.colorInverseForeground,
    fontSize: t.fontSize2xl,
    fontWeight: t.fontWeightBold,
  },
}))

export { AnimationsScreen }
