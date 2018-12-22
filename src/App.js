import React from 'react';
import { Root, Routes } from 'react-static';
import { Link } from '@reach/router';

import 'normalize.css';
import './app.scss';

function App() {
  return (
    <Root>
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
    </Root>
  );
}

export default App
