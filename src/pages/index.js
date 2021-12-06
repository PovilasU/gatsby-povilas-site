import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Povilas, full-stact developer.</h2>
      <p>
        The best way to reach me is via &nbsp;
        <Link to="/contact">Contact me</Link>.
      </p>
    </div>
  )
}

export default IndexPage
