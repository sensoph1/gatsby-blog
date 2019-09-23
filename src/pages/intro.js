import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

export default () => (
    <Layout>
        <div>
    <Helmet
      title="Intro to the gatsby"
      meta={[
        { name: 'description', content: 'Simple inro to gatsby' },
        { name: 'keywords', content: 'intro, gatsby,react,static' },
      ]}
    />
    Welcome to the gatsby intro page
    <hr />
    <Link to="/">Move to Home</Link>
  </div>
  </Layout>
)