import React from "react"
import header_im from "../../images/left_Section.svg"
import TypeAnim from "../../utils/TypeAnim/TypeAnim"

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="padWrap">
          <img src={header_im} alt="Veen.Design" title="Veen.Design" />
          <TypeAnim
            heading={""}
            dataText={[
              "UI & UX Researcher",
              "Visual Design Enthusiast",
              "Web Developer",
              "Photoholic",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
