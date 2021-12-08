import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via &nbsp;
        <a
          href="https://www.linkedin.com/in/povilas-urbonas-0a6a53a4/"
          target="_blank"
        >
          Linked in profile
        </a>
        .
      </p>
    </Layout>
  )
}

export default ContactPage
