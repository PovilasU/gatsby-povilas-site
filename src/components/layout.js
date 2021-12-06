import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <h1>Povilas Site </h1>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
