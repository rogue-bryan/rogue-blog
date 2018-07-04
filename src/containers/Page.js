import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <div>
      {convert(data.contents)}
    </div>
  </div>
))
