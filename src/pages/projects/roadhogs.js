import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const roadhogs = () => (
  <Layout>
    <SEO title="Roadhogs" />
    <h1>Roadhogs</h1>
    
    <Link to="/">home</Link>
  </Layout>
)

export default roadhogs
