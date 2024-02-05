import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PageLayout = () => {

    const posts = ["post 1", "post 2", "post 3", "post 4", "post 5"]

  return (
    <>
    <Outlet/>
         <li><Link to='/postpage/newpost' >New Post</Link> </li>
         <br></br>
        {
          
             <li>
              <Link to="/postpage/id:1"  >post 1</Link> 
             </li>
             
          
        }
    </>
  )
}

export default PageLayout