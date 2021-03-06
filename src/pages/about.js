import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      Under Construction
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query Site {
    site {
      siteMetadata {
        title
      }
    }
  }
`
