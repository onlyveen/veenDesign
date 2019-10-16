import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <About/>
    <Travel/>
  </Layout>
)

export default IndexPage
