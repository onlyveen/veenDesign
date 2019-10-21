import React from "react"

import Layout from "../components/layout"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import Connect from "../components/Home/Connect"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Travel />
    <Connect />
  </Layout>
)

export default IndexPage
