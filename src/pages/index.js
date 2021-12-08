import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Povilas, a full-stack developer.</h2>
      <p>
        The best way to reach me is via &nbsp;
        <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
