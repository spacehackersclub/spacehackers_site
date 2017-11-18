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
		}
	]
};
