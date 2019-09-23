import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>I’m Jeremy Barkley. I am a Systems admin for OpenVMS and RedHat Linux systems and freelance web
       developer living in the Texas Panhandle. I have had an interest in web development and design since as far back as high school when I built a website with 
       some friends. The technology has changed a lot and that actually makes me very happy.</p>
        
    <p>In my free time (when i can find it), I also enjoy creating objects in 3d using Blender 3d, 
        as well as CrossFit, spending time with family and being outdoors.</p>
    
    <Link to="/">home</Link>
  </Layout>
)

export default about

