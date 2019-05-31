/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Header from "./header/header"
import Helmet from "react-helmet"
import layout from "./mylayout.module.sass"

const Layout = ({ children }) => (
      <div className={layout.container}>
        <Helmet>
          title="Webseite von Deborah Kopanitsak"
        </Helmet>
        <Header/>
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>   
)

export default Layout
