import React from "react"
import Layout from "../components/layout"
import MyWork from "../components/Home/MyWork"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO
      title="#pragoview"
      description="Here you go.... So far i've worked on these art works, websites and branding. An have a look on #pragoview"
    />
    <MyWork />
  </Layout>
)

export default Portfolio
