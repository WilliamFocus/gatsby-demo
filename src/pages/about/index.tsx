import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const About: React.FC = () => (
  <Layout>
    <div style={{ marginTop: 60, textAlign: "center" }}>
      <Seo title="About" />
      <h1 style={{ marginBottom: 40 }}>About this demo</h1>
      <p>
        This demo is built using Gatsby & the gatsby-source-moltin plugin. All
        catalog pages are statically created at build time and all dynamic
        cart/checkout logic is performed client-side with React.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default About
