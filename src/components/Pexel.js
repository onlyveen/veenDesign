import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Pexel = () => {
  // const data = useStaticQuery(graphql`
  //   query PhotosQuery {
  //     allUnsplashPhoto(sort: { fields: [created_at], order: DESC }) {
  //       edges {
  //         node {
  //           id
  //           user {
  //             id
  //             name
  //           }
  //           urls {
  //             full
  //             regular
  //             small
  //           }
  //           description
  //           created_at
  //         }
  //       }
  //     }
  //   }
  // `)

  //   console.log(data)
  return <div id="Pexel"></div>
}

export default Pexel
