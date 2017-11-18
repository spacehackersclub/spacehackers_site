import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Logo from "../images/logo.png";

import "./index.css";

//http://www.palettable.io/03031B-89D9DC-528972-385A44-FF7F50-CCCBCF

const Header = ({ data }) => (
  <div
    style={{
      background: "#FF7F50", //FCFBF6
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#20537A",
            textDecoration: "none"
          }}
        >
          Space Hackers
        </Link>
      </h1>
      <img
        width="150"
        height="150"
        src={Logo}
        style={{
          textAlign: "center",
          margin: "0 auto",
          margin: "10px"
        }}
      />
      <h2>{data.site.siteMetadata.purpose}</h2>
    </div>
  </div>
);

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Space Hackers"
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.purpose
        },
        {
          name: "keywords",
          content: "hackers, space, space exploration, community"
        }
      ]}
    />
    <Header data={data} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
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
