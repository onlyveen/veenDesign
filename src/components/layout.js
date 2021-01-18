import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  RiHome6Line,
  RiInformationLine,
  RiImage2Line,
  RiChatSmileLine,
} from "react-icons/ri"

import NavCircle from "./NavCircle"
import "../styles/main.scss"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <NavCircle>
        <Link className="noBgHover" to="/#home">
          <RiHome6Line />
        </Link>
        <Link className="noBgHover" to="/#about">
          <RiInformationLine />
        </Link>

        <Link className="noBgHover" to="/portfolio">
          <RiImage2Line />
        </Link>
        <Link className="noBgHover" to="/#connect">
          <RiChatSmileLine />
        </Link>
      </NavCircle>
      <div id="page">
        <main>{children}</main>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
