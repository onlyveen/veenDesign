import React, { useEffect, useState } from "react"
import Unsplash, { toJson } from "unsplash-js"

const Pexel = () => {
  const [picturesData, setPicturesData] = useState(null)

  useEffect(() => {
    const unsplash = new Unsplash({
      accessKey:
        "502d2f0179f9f68d463448c708de3e4fc5efd654c7fc1fb0e4ad4779ec5dcf39",
    })

    unsplash.users
      .photos("onlyveen", 1, 20, "latest", false)
      .then(toJson)
      .then(json => {
        console.log(json)
        setPicturesData(json)
      })
  }, [])

  return (
    <div id="Pexel">
      {picturesData &&
        picturesData.length &&
        picturesData.map(picData => <img src={picData.urls.thumb}></img>)}
    </div>
  )
}

export default Pexel
