import './App.css'
import About from './pages/About/About.jsx'
import New from './pages/New/New.jsx'
import Search from './pages/Search/Search.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { useSelector } from 'react-redux'
import { getCartItems } from './redux/cartSlice.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Wishlist from './pages/WishList/WishList.jsx'

function App() {

  const cartItems = useSelector(getCartItems);

  return (
    <div>
      <Router>
        <nav>
          <Link to='/' className='link'>About Us</Link>
          <Link to='/new' className='link'>New Products</Link>
          <Link to='/search' className='link'>Search</Link>
          <Link to='/wishlist' className='link'>Wish List</Link>
          <Link to='/cart' className='link' id='cart-link'>Cart ({cartItems.length})</Link>
        </nav>

        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;