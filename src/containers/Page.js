import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Notes from './Notes'

export default withRouteData(({ data, posts }) => {
  return (
  <div>
    <Notes posts={posts} />
    <h3>{data.title}</h3>
    <div>
      {convert(data.contents)}
    </div>
  </div>
  )
})