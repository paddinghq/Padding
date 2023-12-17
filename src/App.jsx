import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="xl:hidden">
        mobile view not ready
        tab view not ready
      </div>
      <div className="mx-auto hidden xl:block">
        <div className="container mx-auto">
          <Header />
        </div>
        <Hero />
        <div className="container mx-auto">
          <About />
          <WhatWeDo />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
    
  )
}

export default App
