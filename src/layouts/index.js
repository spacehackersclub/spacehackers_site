import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

const TemplateWrapper = ({ children, data }) => (
	<div>
		<Helmet
			title="Space Hackers"
			meta={[
				{
					name: 'description',
					content: data.site.siteMetadata.purpose
				},
				{
					name: 'keywords',
					content: 'hackers, space, space exploration, community'
				}
			]}
		/>

		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export const query = graphql`
	query SiteQuery {
		site {
			siteMetadata {
				purpose
			}
		}
	}
`;

export default TemplateWrapper;
