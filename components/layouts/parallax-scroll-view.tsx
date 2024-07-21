import type { PropsWithChildren, ReactElement } from "react"
import { View, useColorScheme } from "react-native"
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const HEADER_HEIGHT = 250

type Props = PropsWithChildren<{
  headerImage: ReactElement
  headerBackgroundColor: { dark: string; light: string }
}>

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light"
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)
  const { styles } = useStyles(stylesheet)

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
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
    </View>
  )
}

const stylesheet = createStyleSheet((t, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingRight: rt.insets.right,
    // paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left,
  },
  header: {
    height: t.size64,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    gap: t.space4,
    padding: t.space8,
    overflow: "hidden",
  },
}))
