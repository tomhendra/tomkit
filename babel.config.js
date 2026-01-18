module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-compiler',
      ['react-native-unistyles/plugin', { root: 'src' }],
      'react-native-worklets/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  }
}
