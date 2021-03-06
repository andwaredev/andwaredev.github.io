module.exports = {
  siteMetadata: {
    title: 'Andrew Ware',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrew Ware',
        short_name: 'Andrew Ware',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#485fc7',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
