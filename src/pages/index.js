import React from "react"

import Layout from "../components/layout"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import Connect from "../components/Home/Connect"
import SEO from "../components/seo"
import header_im from "../images/header_im.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Praveen Gorakala"
      image={header_im}
      description="an UI, UX designer and developer @ antstack.io, focused on designing solutions with elegantly simple interfaces to delight users and create a positive impact on business. Passionate about modern, trendy, minimalistic and impactful designs. I'm always eager to learn new things and constantly pushing my boundaries to get better at the craft. My envision is to bring the ideas into life in breathtaking Look and Feel and produce a well casted piece of output."
    />
    <Header />
    <About />
    <Travel />
    <Connect />
  </Layout>
)

export default IndexPage
