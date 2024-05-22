import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import services from './components/page/Services'
function App() {
  
  return (
    <>
      <div className=''>
        <Router>
          <Header/>
              <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/services' component={services}/>
              </Switch>
            <Footer/>
        </Router>
        
      </div>
    </>
  )
}

export default App
