import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { animated } from "react-spring"
import { use3dEffect } from "use-3d-effect"
import ColourShuffle from "../components/colourShuffle"
import Greeting from "../components/Greeting"

const IndexPage = () => {
  const ref = React.useRef(null)
  const { style, ...mouseHandlers } = use3dEffect(ref)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ColourShuffle />
      <Greeting />
      <div className="main">
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <div className="intro">
          <p>
            Hi{" "}
            <span role="img" aria-label="hand wave">
              👋
            </span>{" "}
            <br />
            <br />
            I&#8217;m Arjun. I live in Crawley 🇬🇧 and write software for the web.
          </p>
        </div>
        <div className="pic">
          <animated.div
            ref={ref}
            style={{
              ...style,
            }}
            {...mouseHandlers}
          >
            <Image />
          </animated.div>
        </div>
        <div className="bio">
          <p>
            I'm a full-stack web developer and a platform agnostic geek.  
          </p>

          <p>
            I enjoy reading books, photography, cycling, chirps of little birds
            in the morning, and using the Oxford comma. Sometimes I{" "}
            <a href="https://arjun.ninja/blog">blog</a>.
          </p>

          <p>
            Say hi on <a href="https://twitter.com/arjundot/">twitter</a> or
            shoot me an{" "}
            <a href="mailto:arjunmunji+arjun.ninja@gmail.com?subject=Hi">
              email
            </a>{" "}
            like it's the 90s.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
