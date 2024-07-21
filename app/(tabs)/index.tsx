import ParallaxScrollView from "@/components/layouts/parallax-scroll-view"
import { Text } from "@/components/ui/text"
import { Link } from "expo-router"
import { Image, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function HomeScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text type="title">Tomkit</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Template</Text>
        <Text>
          An opinionated starter template for React Native using the Expo
          framework.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Unistyles</Text>
        <Text>
          Unistyles combines the simplicity of StyleSheet with the performance
          of C++.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">React Native Primitives</Text>
        <Text>
          Built upon unstyled universal components with a focus on
          accessibility.
        </Text>
      </View>
      <Link href="foo">
        <Text>Force 404</Text>
      </Link>
    </ParallaxScrollView>
  )
}

const stylesheet = createStyleSheet((t) => ({
  titleContainer: {
    paddingVertical: t.space2,
  },
  stepContainer: {
    gap: t.space4,
    marginBottom: t.space2,
  },
  reactLogo: {
    position: "absolute",
    height: 178,
    width: 290,
    bottom: t.space0,
    left: t.space0,
  },
}))
