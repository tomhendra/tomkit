import ParallaxScrollView from '@/components/parallax-scroll-view'
import { Text } from '@/components/ui/text'
import { Image, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('../../../assets/images/partial-tom-logo.png')}
          style={styles.logo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text type="title">Tomkit</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text type="subtitle">Template</Text>
        <Text>
          An opinionated starter template for React Native using Rock.
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
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create((t) => ({
  titleContainer: {
    paddingVertical: t.space2,
  },
  stepContainer: {
    gap: t.space4,
    marginBottom: t.space2,
  },
  logo: {
    position: 'absolute',
    height: 178,
    width: 290,
    bottom: t.space0,
  },
}))

export { HomeScreen }
