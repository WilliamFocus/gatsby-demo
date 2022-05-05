import * as React from 'react'
import { tipsStyles } from '../styles/tips.module.less'

const Header: React.FC = () => {
  return (
    <div className={tipsStyles}>
      Use code <em>SAVE50</em> at checkout for 50% off all orders
    </div>
  )
}

export default Header
