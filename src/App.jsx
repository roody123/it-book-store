import './App.css'
import About from './pages/About/About.jsx'
import New from './pages/New/New.jsx'
import Search from './pages/Search/Search.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (
    <div>
      <Router>
        <nav>
          <Link to='/' className='link'>About Us</Link>
          <Link to='/new' className='link'>New Products</Link>
          <Link to='/search' className='link'>Search</Link>
        </nav>

        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;