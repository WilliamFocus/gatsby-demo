import * as React from "react"
import { Link } from "gatsby"
import { navStyles } from "../styles/header.module.less"
import ShoppingIcon from "./ShoppingIcon"
import SearchIcon from "./SearchIcon"

type HeaderPropsType = {
  siteTitle: string
}

const Header: React.FC<HeaderPropsType> = ({ siteTitle = "" }) => {
  return (
    <header>
      <div className={navStyles}>
        <ul className="menu-list">
          <li className="menu-item">Products</li>
          <li className="menu-item">About</li>
          <li className="menu-item show-sub">
            Collections
            <ul className="menu-sub-list">
              <li className="item">Office Lamps</li>
              <li className="item">Bedroom Lamps</li>
              <li className="item">Top Picks</li>
            </ul>
          </li>
        </ul>
        <div className="middle-title">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="more-tools">
          <div className="tool icon">
            <SearchIcon />
          </div>
          <div className="tool icon">
            <ShoppingIcon />
          </div>
          <div className="tool login">Login</div>
        </div>
      </div>
    </header>
  )
}

export default Header
