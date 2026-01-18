import { ParallaxScrollView } from '@/components/layout/parallax-scroll-view'
import { Text } from '@/components/ui/text'
import { Image, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('@/../assets/images/partial-tom-logo.png')}
          style={styles.logo}
        />
      }
    >
      <View style={styles.title}>
        <Text variant="title">Tomkit</Text>
      </View>
      <View style={styles.list}>
        <Text>
          An opinionated starter template for React Native using Rock.
        </Text>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create((t) => ({
  title: {
    paddingVertical: t.space(2),
  },
  list: {
    gap: t.gap(4),
    marginBottom: t.space(2),
  },
  logo: {
    position: 'absolute',
    height: 178,
    width: 290,
    bottom: 0,
  },
}))

export { HomeScreen }
