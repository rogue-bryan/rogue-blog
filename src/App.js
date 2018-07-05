import React from 'react'
import { Router, Link, Head } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'

import 'normalize.css'
import './app.scss'

const App = () => (
  <Router>
    <div>
      <Head>
        <title>Bryan's Tech Blogger</title>
      </Head>
      <div className="paper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <section>
          <Routes />
        </section>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
