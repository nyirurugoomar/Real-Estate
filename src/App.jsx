import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
function App() {
  
  return (
    <>
      <div className=''>
        <Router>
          <Header/>
              <Switch>
              <Route exact path='/' component={Home}/>
              </Switch>
            <Footer/>
        </Router>
        
      </div>
    </>
  )
}

export default App
