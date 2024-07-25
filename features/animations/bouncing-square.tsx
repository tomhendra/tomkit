import { Text } from "@/components/ui/text"
import { Pressable } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SQUARE_SIZE = 120

function BouncingSquare() {
  const { styles } = useStyles(stylesheet)

  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)
  // position shared values
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // ALWAYS translate before rotate
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    }
  }, [])

  return (
    <>
      <Animated.View
        onTouchStart={() => {
          scale.value = withTiming(1.2)
        }}
        onTouchEnd={() => {
          scale.value = withTiming(1)
          rotate.value = withTiming(rotate.value + 90)
        }}
        style={[styles.square, rStyle]}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          // updated translate between [-100, 100]
          const MAX_TRANSLATION = 100
          const tx = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION
          const ty = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION
          translateX.value = withSpring(tx)
          translateY.value = withSpring(ty)
        }}
      >
        <Text style={styles.buttonText}>?</Text>
      </Pressable>
    </>
  )
}

const stylesheet = createStyleSheet((t) => ({
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

export { BouncingSquare }