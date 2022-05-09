import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'

import './App.css'
import { FaShoppingCart } from "react-icons/fa";
import data from './data/products.json'



function App() {
  
  //http://localhost:3005/products
  
  
  return (
    <div className="App">
      <Router>
        <nav className='navbar d-flex justify-content-between '>
          <div className="navbar-brand text-light" >
            <img src='/img/logo.png'  className='logo' alt='logo'/>
          </div>

          <ul class="nav ">
            <li class="nav-item  ">
              <Link to='/' class="nav-link  text-light " aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='product' class="nav-link text-light" href="#">Product</Link>
            </li>
            <li class="nav-item">
              <Link to='about' class="nav-link text-light" href="#">About</Link>
            </li>
            <li class="nav-item">
              <Link to='contact' class="nav-link text-light" href="#">Contact</Link>
            </li>
          </ul>
          <div>
            <FaShoppingCart className='shopping-icon' />
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product products={data} />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
