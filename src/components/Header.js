import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="py-6 md:py-12 flex items-center justify-between">
    <Link to="/" className="mr-auto" title={siteTitle}>
      <img src="/static/images/logo.svg" className="block" />
    </Link>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
