import React from "react"
import Travel_im from "../../images/travel.svg"

const Travel = () => {
  return (
    <div id="Travel">
      <div className="container">
        <div className="travel_dec">
          <h1 className="main-heading-ttl lined">My Journey</h1>
          <p>
            This is all started at <strong>HomeShop 18</strong>. Working in an
            e-commerce platform as a catalouge designer, my interest deviated
            towards graphic design and web development. And started playing with
            things related to these and found way to the world of web
            technologies through <strong>Infibeam Avenues</strong>, A check
            point helped me grow to reach my next level as UI, UX designer and
            developer at <strong>antstack.io</strong>, a fullstack serverless
            company aiming at providing holistic solutions to get you up and
            running with serverless!
          </p>
        </div>
        <div className="travel_illust">
          <img src={Travel_im} alt="Veen.Design" title="Veen.Design" />
        </div>
      </div>
    </div>
  )
}

export default Travel
