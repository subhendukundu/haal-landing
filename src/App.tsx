import React from 'react'
import { Helmet } from 'react-helmet-async'
import { renderRoutes } from 'react-router-config'
import { Context } from 'vite-ssr/react'

export default function App({ router }: Context) {
  const title = 'Haal | Simplify business tasks'
  const description = 'Work flexibly and keep track of your business with Hall mobile App'

  

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content="https://repository-images.githubusercontent.com/341177866/d42c1300-7633-11eb-84fd-ec68894d4fc9"
        />
      </Helmet>

      <main className="min-h-screen h-full">
        {renderRoutes(router.routes)}
      </main>
    </>
  )
}
