import React from 'react'
import { Router, Link, Head } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'
import Analytics from './Analytics'

import '../node_modules/papercss/dist/paper.css';

const App = () => (
  <Router>
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Bryan's Tech Blogger</title>
      </Head>
      <div className="paper container">
        
        <nav className="split-nav">
          <div className="nav-brand">
            <h3>test</h3>
          </div>
          <div className="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1"/>
            <button>
              <label htmlFor="collapsible1">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </label>
            </button>
            <div className="collapsible-body">
              <ul className="inline">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>            
          </div>
        </nav>

        <section>
          <Analytics id={process.env.GA_TOKEN}>
            <Routes />
          </Analytics>
        </section>

      </div>
    </div>
  </Router>
)

export default hot(module)(App)
