import React from 'react'
import '../css/post.css'
import '../index.css'  


const Post = ({post}) => {

  // const {id, time, post, postTitle, postCaption } = props


   return (
    <div className='postmain'>
        <ul className='postsection' >
      <li className='indivpost ' key={post.id} > 
         
         <ul className='userdeco '>
           <li><img className='profilepic' src={post.dp} alt="dp" /></li>
           <li className='username' >{post.username} <strong>.</strong> <substr>{post.time}</substr> </li>
         </ul>
         
        <img className='postimg' src={post.post} alt="" />
         
        <ul className='postcontentdeco '>
           <li className='username' >{post.username}</li>
           <li className='posttitle' >{post.postTitle}</li>
         </ul>

         <p className='postCaption' >{post.postCaption}</p>    
       </li> 
     </ul>  
    </div>
  )
} 

export default Post