import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    
    <Link to="/">home</Link>
  </Layout>
)

export default blog
