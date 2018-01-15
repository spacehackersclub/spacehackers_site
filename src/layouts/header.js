import React from 'react';
import Link from 'gatsby-link';
import Logo from '../images/logo.png';
import Background from '../images/background.png';
import tachyons from 'tachyons';
import './index.css';

const Header = ({ data }) => (
	<div
		className="vh-100 dt w-100 tc bg-dark-gray white cover bg-cover"
		style={{ background: `url(${Background})`, noRepeat: 'center' }}
	>
		<div className="dtc v-mid">
			<header>
				<img
					width="150"
					height="150"
					src={Logo}
					style={{
						textAlign: 'center',
						margin: '0 auto',
						margin: '10px'
					}}
				/>
				<h1 className="f1 lh-title" style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
							fontFamily: 'Roboto',
							color: '#000',
							textDecoration: 'none'
						}}
					>
						Space Hackers
					</Link>
				</h1>
			</header>
			<blockquote
				className="f3 lh-copy"
				style={{
					color: '#000',
					minWidth: '90%',
					margin: 'auto',
					marginTop: '20px',
					marginBottom: '20px',
					textDecoration: 'none',
					fontSize: '1.25em',
					fontFamily: 'Roboto'
				}}
			>
				A community of independent hackers dedicated to furthering humanity's knowledge of the universe through
				open collaboration.
			</blockquote>
			<div className="ph3">
				<a
					href="#chat"
					className="f6 link dim br3 ph4 pv2 mr2 mb2 dib white bg-near-black"
					style={{
						fontFamily: 'Roboto'
					}}
				>
					Join Chat
				</a>
				<a
					className="f6 link dim br3 ph4 pv2 mb2 dib white bg-near-black"
					href="#more"
					style={{
						fontFamily: 'Roboto'
					}}
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
);

//   TODO: figure out how to use this here without getting duplicate query error: {data.site.siteMetadata.purpose}</h2>

export default Header;
