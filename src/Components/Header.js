import React from 'react'
import '../index.css'
import '../css/headeranimation.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";



const Header = ({title, scrollToTopHome, handleHeaderSearchIconClick}) => {
  return (
 
      <header className='mainheader' >
        <div className='childone'>
        <Link to='/about' className='mainheadertitle' ><h1>{title}</h1></Link>
        <p>Where Every Post Finds Harmony</p>
        </div>
        <ul className='headericons' >
          <li className='homeicon'>
            <Link to="/" > <IoHome className='homeicon' onClick={scrollToTopHome} /> </Link>
          </li>
          <li >
          <Link to="/search" > <RiSearchLine className='searchicon' onClick={handleHeaderSearchIconClick } /></Link>  
          </li>
        </ul>
     </header>
     
   
  )
}

export default Header