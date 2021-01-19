import React from "react"
import {
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaGithub,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa"
import logo from "../../images/drop.svg"
const Connect = () => {
  return (
    <div id="connect">
      <h1 className="main-heading-ttl lined">Connect</h1>
      <ul className="soci">
        <li className="FaTwitter">
          <a href="//twitter.com/onlyveen" target="_blank" data-name="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li className="FaInstagram">
          <a
            href="//instagram.com/onlyveen"
            target="_blank"
            data-name="Instagram"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="FaCodepen">
          <a href="//codepen.io/onlyveen" target="_blank" data-name="Codepen">
            <FaCodepen />
          </a>
        </li>
        <li className="FaLinkedin">
          <a
            href="//linkedin.com/in/onlyveen/"
            target="_blank"
            data-name="Linkedin"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="FaGithub">
          <a href="//github.com/onlyveen" target="_blank" data-name="Github">
            <FaGithub />
          </a>
        </li>
        {/* <li className="FaDribbble">
          <a href="//dribble.com/onlyveen" data-name="Dribbble">
            <FaDribbble />
          </a>
        </li> */}
      </ul>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="copy">
          2021 © praveengorakala.com | All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Connect
