import { Container } from '@/components/layout/container'
import Icon from '@react-native-vector-icons/lucide'
import { Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { StyleSheet, useUnistyles } from 'react-native-unistyles'

const SQUARE_SIZE = 120

function BouncingSquare() {
  const { theme } = useUnistyles()

  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    }
  }, [])

  return (
    <Container>
      <View style={styles.container}>
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
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          const MAX_TRANSLATION = 100
          const tx = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION
          const ty = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION
          translateX.value = withSpring(tx)
          translateY.value = withSpring(ty)
        }}
      >
        <Icon name="dices" size={32} color={theme.colorInverseForeground} />
      </Pressable>
    </Container>
  )
}

export { BouncingSquare }

const styles = StyleSheet.create((t) => ({
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
  button: {
    height: t.size16,
    width: t.size16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: t.colorPrimary,
    borderRadius: t.rounded4xl,
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
}))
