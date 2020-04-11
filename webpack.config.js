// For bundling tailwind during serve and build
module.exports = {
    module : {
      rules: [
        {
          test   : /\.scss$/,
          loader : 'postcss-loader',
          options: {
            ident  : 'postcss',
            syntax: 'postcss-scss',
            plugins: () => [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ]
          }
        }
      ]
    }
  };
  