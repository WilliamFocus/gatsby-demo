import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Tips from './Tips'
import Footer from './Footer'
import * as styles from '../styles/layout.module.less'

type LayoutPropsType = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Tips />
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

export default Layout
