// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})

// Mock react-native-unistyles
jest.mock('react-native-unistyles', () => ({
  StyleSheet: {
    create: (styles) => styles,
    configure: jest.fn(),
  },
  useStyles: () => ({
    styles: {},
    theme: {},
  }),
}))

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
