import React from 'react'
import '../css/missing.css'
import pageNotFOund from '../images/page-not-found.png'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='mainmissing'>
         
       <div className='missingcontainer' >
        <img className='page-not-found-img' src={pageNotFOund} alt="page not found" />
       <h3>Sorry, this page isn't available.</h3>
        <p>The link you followed may be broken, or the page may have been removed. Go back to <Link to="/" >PostMingle</Link> .</p>
       </div>
    </main>
  )
}

export default Missing