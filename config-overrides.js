const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  (config) => {
    const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;

    rules.forEach(rule => {
      if (rule.use) {
        rule.use.forEach(loader => {
          if (loader.loader && loader.loader.includes('postcss-loader')) {
            loader.options = {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            };
          }
        });
      }
    });

    return config;
  }
);