import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Home from './page/Home';
import About from './page/About';
import WhatWeDo from './page/WhatWeDo';
import Contact from './page/Contact';
import './App.css';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div>
        <Home />
        
        <button onClick={scrollToTop}>Scroll to Top</button>

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
