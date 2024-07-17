import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function HomeScreen() {
  const { styles } = useStyles(stylesheet);

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tomkit</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Template</ThemedText>
        <ThemedText>
          An opinionated starter template for React Native using the Expo
          framework.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Unistyles</ThemedText>
        <ThemedText>
          Unistyles combines the simplicity of StyleSheet with the performance
          of C++.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">React Native Primitives</ThemedText>
        <ThemedText>
          Built upon unstyled universal components with a focus on
          accessibility.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  titleContainer: {
    paddingVertical: theme.space.$2,
  },
  stepContainer: {
    gap: theme.space.$4,
    marginBottom: theme.space.$2,
  },
  reactLogo: {
    position: "absolute",
    height: 178,
    width: 290,
    bottom: theme.space.$0,
    left: theme.space.$0,
  },
}));
