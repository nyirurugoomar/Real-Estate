import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import services from './components/page/Services'
import OurPortfolio  from './components/page/OurPortfolio'
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
               <Route path='/BookCall' component={BookCall}/>

               
              </Switch>
            <Footer/>
        </Router>
        
      </div>
    </>
  )
}

export default App
