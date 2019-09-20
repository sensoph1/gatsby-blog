import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <h2>
        Let me turn your ideas into great looking, functional websites and web applications.
        </h2>
        <div class="jumbotron">
        <Image />
        </div>

        <p>I build fast, responsive, mobile first websites:</p>
            <ul><li>Landing page (HTML, CSS, JavaScript)</li>
            <li>CMS Integration (Wordpress - from scratch or theme customization)</li>
            <li>Converting your Design into to a Landing Page or WordPress</li>
            </ul>
        


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
