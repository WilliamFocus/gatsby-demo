import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { indexStyles } from "../styles/index.module.less"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <div className={indexStyles}>
      <div className="banner">
        <div className="banner-box">
          <div className="title">
            The Elastic Path Commerce Cloud demo store
          </div>
          <div className="desc">
            This is a Gatsby demo store, built using the source plugin to fetch
            products.
          </div>
          <div className="desc">
            Product, category and collection pages are statically generated, and
            all dynamic cart/checkout functionality happens dynamically with our
            JS SDKs.
          </div>
          <a className="btn">
            <Link to="/products">Shop Now</Link>
          </a>
        </div>
      </div>
      <div className="categories">
        <article className="categories-item">
          <h1 className="title">Desk Lamps</h1>
          <div className="desc">
            Put the shine on your work by lighting up your office with our range
            of desk lamps.
          </div>
          <div className="btn">
            <Link to="/products">Discover</Link>
          </div>
        </article>
        <article className="categories-item">
          <h1 className="title">Floor Lamps</h1>
          <div className="desc">
            Floor lamps are an easy way to brighten up any space.
          </div>
          <div className="btn">
            <Link to="/products">Discover</Link>
          </div>
        </article>
        <article className="categories-item">
          <h1 className="title">Table Lamps</h1>
          <div className="desc">
            Table lamps are a great way to add comfort and style to your room.
          </div>
          <div className="btn">
            <Link to="/products">Discover</Link>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)

export default IndexPage
