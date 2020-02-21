import React, { Fragment, useState, useEffect } from "react"
import "./NavCircle.scss"

const NavCircle = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [magnetClass, setMagnetClass] = useState(false)
  const [len] = useState(children.length)
  const [angle, setAngle] = useState((360 / len) * activeIndex)

  const [trns_y, setTrns_y] = useState(0)
  const [trns_x, setTrns_x] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", listener)
    return () => {
      window.removeEventListener("mousemove", listener)
    }
  })

  const listener = e => {
    if (window.innerWidth > 767) {
      const mx = e.pageX
      // const my = e.pageY;
      const my = e.pageY - window.pageYOffset
      const range = 100
      if (my < range * 2 && !menuOpen && mx > window.innerWidth - range * 2) {
        setTrns_y((my - range / 1.5) / 2)
        setTrns_x((mx - (window.innerWidth - range / 1.5)) / 2)
        setMagnetClass(true)
      } else {
        setTrns_y(0)
        setTrns_x(0)
        setMagnetClass(false)
      }
    }
  }

  function hoverFunc(index) {
    setAngle((360 / len) * activeIndex)
    if (index >= activeIndex) {
      if (index - activeIndex < len / 2) {
        setAngle(angle + (360 / len) * (index - activeIndex))
      } else {
        setAngle(angle - (360 / len) * (len - index + activeIndex))
      }
    } else if (index < activeIndex) {
      if (activeIndex - index < len / 2) {
        setAngle(angle - (360 / len) * (activeIndex - index))
      } else {
        setAngle(angle + (360 / len) * (len + index - activeIndex))
      }
    }
    setActiveIndex(index)
  }

  return (
    <div id="hdr" className={menuOpen && "open"}>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`toggle-button  ${magnetClass && "magnet"}`}
        style={{ transform: "translate(" + trns_x + "px," + trns_y + "px)" }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="vnav-menu">
        <ul className="list">
          {len ? (
            <Fragment>
              {children.map((child, idx) => (
                <li
                  onClick={() => setMenuOpen(false)}
                  key={idx}
                  onMouseOver={() => hoverFunc(idx)}
                  className={
                    activeIndex === idx ? "list_item active" : "list_item "
                  }
                >
                  {child}
                </li>
              ))}
            </Fragment>
          ) : null}
        </ul>
        <div
          className="pointer"
          style={{ transform: `rotate(${angle}deg) translateZ(0)` }}
        ></div>
      </div>
    </div>
  )
}

export default NavCircle
