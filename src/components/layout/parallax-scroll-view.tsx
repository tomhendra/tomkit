import type { PropsWithChildren, ReactElement } from 'react'
import { View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native-unistyles'

const HEADER_HEIGHT = 250

type Props = PropsWithChildren<{
  headerImage: ReactElement
}>

function ParallaxScrollView({ children, headerImage }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    }
  })

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
          {headerImage}
        </Animated.View>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
    </View>
  )
}

export { ParallaxScrollView }

const styles = StyleSheet.create((t, rt) => ({
  wrapper: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingRight: rt.insets.right,
    paddingLeft: rt.insets.left,
  },
  header: {
    height: t.size64,
    overflow: 'hidden',
    backgroundColor: t.colorAccent,
  },
  content: {
    flex: 1,
    gap: t.space4,
    padding: t.space8,
    overflow: 'hidden',
    backgroundColor: t.colorBackground,
  },
}))
