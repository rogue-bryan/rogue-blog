import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Notes from './Notes'

export default withRouteData(({ data, posts }) => (
  <div>
    <Notes posts={posts} />
    <h2>{data.title}</h2>
    <div>
      {convert(data.contents)}
    </div>
  </div>
));