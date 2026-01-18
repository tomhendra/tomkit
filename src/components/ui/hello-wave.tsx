import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated'
import { Text } from '@/components/ui/text'
import { StyleSheet } from 'react-native-unistyles'

export function HelloWave() {
  const rotationAnimation = useSharedValue(0)

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 }),
    ),
    4,
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

const styles = StyleSheet.create((t) => ({
  text: {
    fontSize: t.space7,
    lineHeight: t.space8,
    marginTop: -6,
  },
}))
