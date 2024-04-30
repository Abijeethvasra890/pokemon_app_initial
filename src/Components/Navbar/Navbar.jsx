import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" href="#">Pokemon App</div>
          <div>
            <div className="navbar-nav">
                <Link className = "nav-item nav-link active" to="/">Home</Link>
                <Link className = "nav-item nav-link" to="/pokemons">Pokemons List</Link>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar