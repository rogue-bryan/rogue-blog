import React from 'react'
import { Router, Link, Head } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'
import Analytics from './Analytics'

import 'normalize.css'
import './app.scss'

const App = () => (
  <Router>
    <div>
      <Head>
        <title>Bryan's Notes</title>
      </Head>
      <div className="paper">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </header>
        <main>
          <Analytics id={process.env.GA_TOKEN}>
            <Routes />
          </Analytics>
        </main>
        <footer>
        </footer>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
