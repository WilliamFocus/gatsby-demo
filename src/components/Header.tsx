import * as React from 'react'
import { Link } from 'gatsby'
import { navStyles } from '../styles/header.module.less'
import ShoppingIcon from './ShoppingIcon'
import SearchIcon from './SearchIcon'

type HeaderPropsType = {
  siteTitle: string
}

const Header: React.FC<HeaderPropsType> = ({ siteTitle = '' }) => {
  return (
    <header>
      <div className={navStyles}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item show-sub">
            Collections
            <ul className="menu-sub-list">
              <li className="item">
                <Link to="/products">Office Lamps</Link>
              </li>
              <li className="item">
                <Link to="/products">Bedroom Lamps</Link>
              </li>
              <li className="item">
                <Link to="/products">Top Picks</Link>
              </li>
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
