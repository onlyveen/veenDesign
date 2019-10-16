import React from "react"

<<<<<<< HEAD
import Layout from "../components/Layout"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
=======
import Layout from "../components/layout"
import Image from "../components/image"
>>>>>>> parent of fe04ff6... init
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
