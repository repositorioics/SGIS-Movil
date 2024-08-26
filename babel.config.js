module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@containers': './src/containers',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@locales': './src/locales',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@themes': './src/themes',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
