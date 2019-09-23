import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:sensoph@gmail.com">email me</a>
    </p>
  </div>

    <Link to="/">home</Link>
  </Layout>
)

export default contact
