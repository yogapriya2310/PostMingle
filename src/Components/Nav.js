import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navigationbar" >
     <ul >
       <li><Link className="navitemss" to='/' >Home</Link></li>
       <li><Link className="navitemss" to='/about' >About</Link> </li>
       <li><Link className="navitemss" to='/postpage' >Add Post</Link> </li>
   
     </ul>
   </nav>
  )
}

export default Nav