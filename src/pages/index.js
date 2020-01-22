import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import World from "../components/world"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{
      display: `block`,
      fontSize: `5em`,
      lineHeight: `2`,
      textAlign: `center`
    }}>unco <World /></h1>
    <p>Twitter <a href="https://twitter.com/unconsume" rel="noopener">@unconsume</a></p>
    <p>Email <a href="mailto:hello@unco.world">hello@unco.world</a></p>
  </Layout>
)

export default IndexPage
