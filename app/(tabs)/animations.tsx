import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function AnimationsScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Animations</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((_, runtime) => ({
  container: {
    flex: 1,
    paddingTop: runtime.insets.top,
    paddingRight: runtime.insets.right,
    paddingBottom: runtime.insets.bottom,
    paddingLeft: runtime.insets.left,
  },
}));
