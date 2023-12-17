import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <div className="xl:hidden">
        mobile view not ready
        tab view not ready
      </div>
      <div className="container mx-auto hidden xl:block">
        <div className="container mx-auto">
          <Header />
        </div>
        <Hero />
        <div className="container mx-auto">
          <About />
        </div>
      </div>
      
    </>
    
  )
}

export default App
