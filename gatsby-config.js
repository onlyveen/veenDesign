module.exports = {
  siteMetadata: {
    title: `Praveen Gorakala`,
    description: `UI, UX designer & developer @antstack.io, focused on designing solutions with elegantly
    simple interfaces, trendy, minimalistic and
    impactful designs. I'm always eager to learn new things and
    constantly pushing ny boundaries to get better at the craft. My
    envision is to bring the ideas into life in breathtaking Look and
    Feel and produce a well casted piece of output.`,
    author: `@onlyveen`,
    titleTemplate: "%s · UI, UX designer & developer",
    url: "https://www.praveengorakala.com", // No trailing slash allowed!
    image: "./src/images/header_im.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
