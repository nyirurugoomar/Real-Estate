import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import SlidePage from './components/SlidePage'
import Strategies from './components/Strategies'

function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <Strategies/>
      <About/>
      <SlidePage/>
      <Banner/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
