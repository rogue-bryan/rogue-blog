import React from 'react'
import { withRouteData, Head, SiteData } from 'react-static'
import convert from 'htmr'
import Notes from './Notes'

export default withRouteData(({ data, posts }) => (
  <div>
    <Head>
      <SiteData render={({ siteTitle }) => (
        <title>{siteTitle} - {data.title}</title>
      )} />
    </Head>
    <Notes posts={posts} />
    <h2>{data.title}</h2>
    <div>
      {convert(data.contents)}
    </div>
  </div>
  )
)