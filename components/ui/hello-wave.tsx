import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated"

import { Text } from "@/components/ui/text"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export function HelloWave() {
  const rotationAnimation = useSharedValue(0)
  const { styles } = useStyles(stylesheet)

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 }),
    ),
    4, // Run the animation 4 times
  )

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }))

  return (
    <Animated.View style={animatedStyle}>
      <Text style={styles.text}>👋</Text>
    </Animated.View>
  )
}

const stylesheet = createStyleSheet((t) => ({
  text: {
    fontSize: t.space.$7,
    lineHeight: t.space.$8,
    marginTop: -6,
  },
}))
