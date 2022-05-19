import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navigationBox'>
        <nav className='navigationBar'>
            <Link to="/" className='links'>DASHBOARD</Link>
            <Link to="/postpage" className='links'>POSTS</Link>
            <Link to="/linkpage" className='links'>LINKS</Link>
        </nav>
    
    </div>
  )
}

export default NavBar