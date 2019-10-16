import React from "react"
import Layout from "../components/layout"
import Maintenance from "../components/maintenance"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Maintenance />
  </Layout>
)

export default IndexPage
