module.exports = {
   siteMetadata: {
      siteUrl: 'https://www.hoserscarwash.ca',
      title: 'Hosers Car Wash'
   },
   plugins: [
      {
         resolve: 'gatsby-plugin-google-fonts',
         options: {
            fonts: ['lato:300,400,700,900'],
            display: 'swap'
         }
      },
      'gatsby-plugin-postcss',
      {
         resolve: 'gatsby-source-sanity',
         options: {
            projectId: 'rc5qxodm',
            dataset: 'production',
            watchMode: true
         }
      },
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            icon: 'src/images/icon.png',
            name: 'Hosers Car Wash',
            short_name: 'Hosers',
            start_url: '/',
            background_color: '#3B4DAA',
            theme_color: '#FFF'
         }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: './src/images/'
         },
         __key: 'images'
      }
   ]
};
