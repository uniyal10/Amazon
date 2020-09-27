import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        {/* Search box */}
        <input type="text" className="header__searchInput" />
      </nav>
    </>
  )
}

export default Header