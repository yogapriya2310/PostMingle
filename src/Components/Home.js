import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {

  // const {id, time, post, postTitle, postCaption } = postone

  return (
    <main className='homeMain'>
        {
           posts.length ? (<Feed posts={posts}/>) : ( <p>No post to display</p> )
        }
    </main>
  )
}

export default Home
