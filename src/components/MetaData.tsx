import React from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title: string
  noTracking?: boolean
}

function MetaData({ title, noTracking }: Props) {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://haal.in" />
      <link rel="canonical" href="http://haal.in" />
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta
        name="description"
        content="Work flexibly and keep track of your business with Hall mobile App."
      />
      <meta name="keywords" content="introduction, open-source" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://haal.in" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Work flexibly and keep track of your business with Hall mobile App."
      />
      <meta property="og:image" content="https://haal.in/images/video.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://haal.in" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content="Work flexibly and keep track of your business with Hall mobile App."
      />
      <meta
        property="twitter:image"
        content="https://haal.in/images/video.png"
      />
      {!noTracking && (
        <script
          src="https://analytics.cool.bio/tracking.js"
          data-project-id="c07de1f9-ffd2-4187-94fc-f89d62aa6ebb"
        ></script>
      )}
      <script>
        {`if(typeof require === 'undefined') var require = {};
        if (typeof exports === 'undefined') var exports = {};`}
      </script>
    </Helmet>
  )
}

export default MetaData
