import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'



function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navbar  navbar-dark bg-dark d-flex justify-content-between'>
          <a class="navbar-brand" href="#">Happy {<br/>} Chocolate</a>
          
          <ul class="nav ">
            <li class="nav-item  ">
              <Link to='/' class="nav-link  text-light " aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='about' class="nav-link text-light" href="#">About</Link>
            </li>
            <li class="nav-item">
              <Link to='about' class="nav-link text-light" href="#">Profil</Link>
            </li>
          </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
