module.exports = {
	siteMetadata: {
		title: `Space Hackers`,
		purpose: `A community of independent hackers dedicated to furthering humanity's knowledge of the universe through 
    open collaboration.`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-109824225-1'
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/favicon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	]
};
