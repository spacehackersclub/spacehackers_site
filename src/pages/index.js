import React from 'react';
import 'tachyons';
import Header from './../layouts/header';

const IndexPage = ({ data }) => (
	<div>
		<article className="athelas">
			<Header data={data} />
			<div className="center measure-wide f5 pv5 lh-copy ph2">
				<h2 className="f2 lh-title">Join Chat</h2>
				<a name="chat" />
				<blockquote
					style={{
						background: 'rgb(50, 48, 48)',
						color: 'white',
						padding: '10px',
						textAlign: 'center',
						borderRadius: '3px',
						fontFamily: 'Roboto'
					}}
				>
					52 Members currently!
				</blockquote>
				<p>
					Join us on <a href="https://keybase.io/">Keybase</a> to chat.
				</p>
				<ol>
					<li>
						First <a href="https://keybase.io/download">download the desktop or mobile Keybase app here.</a>
					</li>
					<li> Click on Teams icon.</li>
					<li>
						Type in <code>spacehackers</code> in the dialog that comes up.
					</li>
					<li>Click continue.</li>
					<li>
						Be sure to give yourself an introduction once you join in the <code>#intro-sentence</code>{' '}
						channel so folks know a little more about you!
					</li>
				</ol>
				<h2 className="f2 lh-title" style={{ fontFamily: 'Roboto' }}>
					Learn More
				</h2>
				<a name="more" />
				<h3 style={{ fontFamily: 'Roboto' }}>Early Beginnings...</h3>
				<p>I am working on creating a community in which we can openly collobarate.</p>
				<ul>
					<li>
						<a href="https://github.com/spacehackersclub">Space Hackers on Github</a>
						<ul>
							<li>
								Looking for ideas on how to organize{' '}
								<a href="https://github.com/spacehackersclub/awesome-spacehackers">
									awesome-spacehackers
								</a>{' '}
								list.
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</article>
	</div>
);

// const IndexPage = ({ data }) => (
// <div>
// 	<h1>Join Us!</h1>
// 	<h2>Early Beginnings...</h2>
// 	<p>I am working on creating a community in which we can openly collobarate.</p>
// 	<ul>
// 		<li>
// 			<a href="https://github.com/spacehackersclub">Space Hackers on Github</a>
// 			<ul>
// 				<li>
// 					Looking for ideas on how to organize{' '}
// 					<a href="https://github.com/spacehackersclub/awesome-spacehackers">awesome-spacehackers</a>{' '}
// 					list.
// 				</li>
// 			</ul>
// 		</li>
// 		<li>
// 			Join us on <a href="https://keybase.io/">Keybase</a> to chat. Join the team <code>spacehackers</code>
// 		</li>
// 	</ul>
// </div>
// );

export default IndexPage;
