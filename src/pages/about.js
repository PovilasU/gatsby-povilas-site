import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I currenty work full-time in a company Allente</p>
      <p>For this project I use Gatsby framework.</p>
      <p>
        Gatsby is an open-source framework that combines functionality from
        React, GraphQL and Webpack into a single tool for building static
        websites and apps.
      </p>
      <p>
        {" "}
        Want to contact me? &nbsp;
        <Link to="/contact">Reach out.</Link>.
      </p>
    </Layout>
  )
}

export default AboutPage
