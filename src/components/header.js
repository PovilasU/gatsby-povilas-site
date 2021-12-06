import React from "react"
import { Link } from "gatsby"
//import "./header.module.scss"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home123
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
