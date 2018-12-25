module.exports = {
  siteMetadata: {
    title: 'JopiSoft - Where software development meets god',
    siteUrl: 'https://www.jopisoft.com',
    description: 'Hairless software development'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    }
  ]
};
