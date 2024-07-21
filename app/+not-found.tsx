import { Link, Stack } from "expo-router"
import { View } from "react-native"

import { Text } from "@/components/ui/text"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function NotFoundScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

const stylesheet = createStyleSheet((t) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: t.space5,
    backgroundColor: t.colorBackground,
  },
  link: {
    marginTop: t.space4,
    paddingVertical: t.space4,
    color: t.colorForeground,
  },
}))
