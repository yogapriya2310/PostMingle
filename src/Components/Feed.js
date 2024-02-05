import React from 'react'
import Post from './Post'
 
const Feed = ({posts}) => {
  
  const reversedPosts = posts.slice().reverse();
  return (
    <main >
        {
          

          reversedPosts.map(post=> <Post key={post.id} post={post} />  )
        }
        
    </main>
  )
}

export default Feed