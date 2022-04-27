import * as React from "react"
import { Link } from "gatsby"
import { footerStyles } from "../styles/footer.module.less"
console.log("footerStyles: ", footerStyles)

type FooterPropsType = {
  siteTitle: string
}

const Footer: React.FC<FooterPropsType> = ({ siteTitle = "" }) => {
  return (
    <footer className={footerStyles}>
      <div className="item">
        <Link to="/">{siteTitle}</Link>
      </div>
      <ul className="item">
        <li>CATEGORIES</li>
        <li>Desk Lamps</li>
        <li>Floor Lamps</li>
        <li>Table Lamps</li>
      </ul>
      <ul className="item">
        <li>INFORMATION</li>
        <li>About</li>
        <li>Shipping & Returns</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul className="item">
        <li>SOCIAL</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Pinterest</li>
      </ul>
    </footer>
  )
}
export default Footer
