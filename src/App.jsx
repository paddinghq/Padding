import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import WhatWeDo from './page/WhatWeDo';
import Contact from './page/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className='scrollbar-w-2 scrollbar-track-zinc scrollbar-thumb-blue overflow-y-scroll scroll-smooth'>
        <Home />
        
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/whatwedo" component={WhatWeDo} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
