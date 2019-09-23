import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <h2>Roadhogs</h2>
    <p><Link to="projects/roadhogs">Roadhogs</Link></p>
        
    
    <Link to="/">home</Link>
  </Layout>
)

export default projects
