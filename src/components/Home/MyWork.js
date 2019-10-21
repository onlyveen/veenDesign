import React, { useState } from "react"
import Pexel from "../Pexel"

const MyWork = () => {
  const [imgModal, setImgModal] = useState(false)
  const [selectedThumb, setSelectedThumb] = useState(null)
  const [modalSrc, setModalSrc] = useState(null)

  const thumbLogos = importAll(
    require.context("../../images/logos/thumbs", false, /\.(png|jpe?g|svg)$/)
  )
  const mediumLogos = importAll(
    require.context("../../images/logos/medium", false, /\.(png|jpe?g|svg)$/)
  )

  const websDesc = [
    {
      name: "WheelsBox",
      logoImg: "web_01_wheelsbox",
      screens: "wheelsbox",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
    {
      name: "autofix.in",
      logoImg: "web_02_autofix",
      screens: "autofix",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
    {
      name: "Lanyard",
      logoImg: "web_03_lanyard",
      screens: "lanyard",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
    {
      name: "AWS Community Day Bengaluru",
      logoImg: "web_04_comunity-day-blr",
      screens: "awsugblrcd",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
    {
      name: "anststack.io",
      logoImg: "web_05_antstack-ico",
      screens: "antstackio",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
    {
      name: "WONE Creations",
      logoImg: "web_06_wone-creations",
      screens: "wone",
      about:
        "Buying a new automobile? Selling an old one? Need to book a test drive or service? We got you covered for all your Automobile needs! WheelsBox is application to solve gaps in car buying experience online and offline.",
    },
  ]

  function clickHandler(imgSrc) {
    const newThumbImageSrc = imgSrc.replace(imgSrc.slice(0, 9), "")
    const newMediumImageSrc =
      mediumLogos[
        Object.keys(mediumLogos).filter(function(item) {
          if (item.includes(newThumbImageSrc)) {
            return item
          } else {
            return null
          }
        })[0]
      ]
    setSelectedThumb(imgSrc)
    setImgModal(true)
    setModalSrc(newMediumImageSrc)
    return null
  }

  function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item)
      return null
    })
    return images
  }
  return (
    <div id="myWork">
      {/* <Pexel /> */}
      <h1 className="main-heading-ttl lined">I've done</h1>
      <div id="gallery" className={imgModal ? "open" : "close"}>
        <h1 className="med-heading-ttl text-center">Branding</h1>
        <div className="logoList">
          {Object.keys(thumbLogos).map((thumb, i) => (
            <div
              key={thumbLogos[thumb]}
              onClick={() => clickHandler(thumb)}
              className={`logoItem ${
                thumb === selectedThumb ? "selected" : "notSelected"
              }`}
              key={thumbLogos[thumb]}
              style={{ order: Object.keys(thumbLogos).length - i }}
            >
              <span className="thumb">
                <img alt={thumbLogos[thumb]} src={thumbLogos[thumb]} />
              </span>
            </div>
          ))}
        </div>
        {imgModal ? (
          <div className="next">
            <span
              className="close-x"
              onClick={() => {
                setImgModal(false)
                setSelectedThumb(null)
              }}
            >
              close
            </span>
            <img alt={modalSrc} src={modalSrc} />
          </div>
        ) : null}
      </div>
      <div className="webby">
        <h1 className="med-heading-ttl text-center">Web Projects</h1>
        <div className="website_list">
          {websDesc.map((web, i) => (
            <div className="website_item">
              <div className="web_in_wrap">
                <div className="logo">
                  <img
                    src={require(`../../images/webs/logos/${web.logoImg}.jpg`)}
                    alt={web.logoImg}
                  />
                </div>
                <div className="desc">
                  <h2 className="site_ttl">{web.name}</h2>
                  <p className="site_about">{web.about}</p>
                </div>
                <div className="screens">
                  <img
                    src={require(`../../images/webs/screens/${web.screens}.jpg`)}
                    alt={web.screens}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWork
