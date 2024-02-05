import React from 'react'
import '../css/addpost.css'
import { Button } from 'bootstrap'
import '../index.css'


const PostPage = ({
   
  addPostTitle,
  addPostCaption, 
  handleAddnewpostchange,
  handleAddPostTitleChange,
  handleAddPostcaptionChange,
  handlenewpostsubmit
  }) =>  {
   
  return (
    <main className='addpost'>
        <form className='addpost-ul' onSubmit={e=>e.preventDefault()} >
           <p>lets post our happiness!!</p>
                <ul>
               <li>
               <label className='addpostimage addpostformlabels'>add post</label>
                 <input 
                   className='addpostimageinput' 
                   type="file" 
                  //  value={addPostCaption}
                   onChange={handleAddnewpostchange}
                 />
               </li> 
               <li>
               <label className='addposttitle addpostformlabels'>post title</label>
                 <input 
                   className='addposttitleInput' 
                   type="text" 
                   value={addPostTitle}
                   onChange={handleAddPostTitleChange}
                 />
               </li>

               <li>
               <label className='addpostcaption addpostformlabels'>post Description</label>
                 <textarea 
                   className='addpostCaptionInput'
                   type="test" 
                   value={addPostCaption}
                   onChange={handleAddPostcaptionChange}
                 ></textarea>
               </li>
            
                </ul>
                <button
                   type="button"
                   onClick={handlenewpostsubmit} 
                   className='upload-new-post-btn'
                >
                  post
                </button>
        </form>
        
    </main>
  )
}

export default PostPage