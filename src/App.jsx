import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import services from './components/page/Services'
import OurPortfolio  from './components/page/OurPortfolio'
import ContactUs from './components/page/ContactUs';
import AboutUs from './components/page/AboutUs';
import BookCall from './components/page/BookCall';
function App() {
  
  return (
    <>
      <div className=''>
        <Router>
          <Header/>
              <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/services' component={services}/>
               <Route path='/OurPortfolio' component={OurPortfolio}/>
               <Route path='/AboutUs' component={AboutUs}/>
               <Route path='/BookCall' component={BookCall}/>
               <Route path='/ContactUs' component={ContactUs}/>

               
              </Switch>
            <Footer/>
        </Router>
        
      </div>
    </>
  )
}

export default App
