import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
	<div>
		<h1>Join Us!</h1>
		<h2>Early Beginnings...</h2>
		<p>I am working on creating a community in which we can openly collobarate.</p>
		<ul>
			<li>
				<a href="https://github.com/spacehackersclub">Space Hackers on Github</a>
				<ul>
					<li>
						Looking for ideas on how to organize{' '}
						<a href="https://github.com/spacehackersclub/awesome-spacehackers">awesome-spacehackers</a>{' '}
						list.
					</li>
				</ul>
			</li>
			<li>
				Join us on <a href="https://keybase.io/">Keybase</a> to chat. Join the team <code>spacehackers</code>
			</li>
		</ul>
	</div>
);

export default IndexPage;
