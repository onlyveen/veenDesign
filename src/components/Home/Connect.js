import React from "react"
import {
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaGithub,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa"
import logo from "../../images/logo.svg"
const Connect = () => {
  return (
    <div id="connect">
      <h1 class="main-heading-ttl lined">Connect</h1>
      <ul className="soci">
        <li className="FaTwitter">
          <a href="" data-name="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li className="FaInstagram">
          <a href="" data-name="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li className="FaCodepen">
          <a href="" data-name="Codepen">
            <FaCodepen />
          </a>
        </li>
        <li className="FaLinkedin">
          <a href="" data-name="Linkedin">
            <FaLinkedin />
          </a>
        </li>
        <li className="FaGithub">
          <a href="" data-name="Github">
            <FaGithub />
          </a>
        </li>
        <li className="FaDribbble">
          <a href="" data-name="Dribbble">
            <FaDribbble />
          </a>
        </li>
      </ul>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="copy">2019 © veen.design | All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Connect
