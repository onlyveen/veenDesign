import React, { useEffect, useState, useRef } from "react"
import axios from "axios"

const Pexel = () => {
  const [picturesData, setPicturesData] = useState([])
  const [showFullImage, setShowFullImage] = useState(null)
  const [zoom, setZoom] = useState(false)
  const parentRef = useRef(null)

  useEffect(() => {
    axios
      .get("https://api.imgur.com/3/account/onlyveen/images?perPage=100", {
        headers: {
          Authorization: "Bearer 76785ebf62d48b279eeef4c7480438f54a019554",
        },
      })
      .then(response => {
        setPicturesData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleClick = (ev, id) => {
    setShowFullImage(id)
    setZoom(false)
  }

  return (
    <div className={`pexelModal ${showFullImage ? "open" : "closed"}`}>
      <div id="Pexel" ref={parentRef}>
        {/* {console.log(picturesData)} */}
        {picturesData.data &&
          picturesData.data.length &&
          picturesData.data.map(picData => (
            <div
              className={`pic ${showFullImage === picData.id ? "active" : ""}`}
              key={picData.id}
              onClick={e => handleClick(e, picData.id)}
            >
              <div className="thumb">
                <img src={`//i.imgur.com/${picData.id}m.jpg`} />
                <span className="full view">View</span>
              </div>
            </div>
          ))}
      </div>
      {showFullImage ? (
        <div className={`next ${zoom ? "zoomin" : "zoomout"}`}>
          <span
            className="close-x"
            onClick={() => {
              setShowFullImage(null)
              setZoom(false)
            }}
          >
            close
          </span>
          <img
            alt={showFullImage}
            onClick={() => setZoom(!zoom)}
            src={`//i.imgur.com/${showFullImage}.jpg`}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Pexel
