import React from "react"
import ui_ux from "../../images/ui_ux.svg"
import branding from "../../images/branding.svg"
import web_dev from "../../images/web_dev.svg"
import visual from "../../images/visual.svg"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="left">
          <h1 className="main-heading-ttl lined light">I am</h1>
          <p>
            an UI, UX designer and developer @{" "}
            <a href="antstack.io" target="_blank" aria-label="antstack.io">
              antstack.io
            </a>
            , focused on designing impactful design solutions with elegantly
            simple interfaces to delight users and create a positive impact on
            business. Passionate about modern, trendy, minimalistic and
            impactful designs. I'm always eager to learn new things and
            constantly pushes his boundaries to get better at the craft. My
            envision is to bring the ideas into life in breathtaking Look and
            Feel and produce a well casted piece of output.
          </p>
        </div>
        <div className="right">
          <h1 className="main-heading-ttl lined inv">I love to do</h1>
          <div className="ico_list">
            <p>
              <img src={ui_ux} alt="UI & UX"></img>
              <span>UI and UX</span>
            </p>
            <p>
              <img src={branding} alt="Branding"></img>
              <span>Logo & Branding</span>
            </p>
            <p>
              <img src={web_dev} alt="Web Development"></img>
              <span>Web Development</span>
            </p>
            <p>
              <img src={visual} alt="Visual Designing"></img>
              <span>Visual Designing</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
