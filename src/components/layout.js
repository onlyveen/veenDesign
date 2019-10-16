import React, {Fragment} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {IoMdHome,IoMdInformationCircleOutline,IoIosSettings,IoMdImage,IoMdMail} from "react-icons/io"

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
          <Link className="noBgHover" to="/#home"><IoMdHome/></Link>
          <Link className="noBgHover" to="/#about"><IoMdInformationCircleOutline/></Link>
          <Link className="noBgHover" to="/#services"><IoIosSettings/></Link>
          <Link className="noBgHover" to="/portfolio"><IoMdImage/></Link>
          <Link className="noBgHover" to="/#connect"><IoMdMail/></Link>
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
