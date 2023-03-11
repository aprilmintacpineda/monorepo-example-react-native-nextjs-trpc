module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // must be synced with tsconfig
        alias: {
          src: './src/'
        }
      }
    ]
  ]
};
