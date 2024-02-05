import React from 'react'
import { CgClose } from "react-icons/cg";
import imgone from '../images/selfies/guy-camping.jpg'


const SearchSuggestion = ({searchposts}) => {
    const test = null
    const test2 = [1, 2, 3]
  return (
    <div className='seachsugg' >
          {
            searchposts.length ?  
          (  <ul className='seachsugg-ul'>

            {
                searchposts.map(srchpost=>
                     <li className='seachsuggli'>
                <img className='srch_dp' src={srchpost.dp} alt="post_dp_1" />
                <div className='srch-posts' > {(srchpost.postTitle).slice(0, 35)}...`</div>
                <div className='srch-cls-btn' ><CgClose /></div>
            </li>
                    )
            }
         </ul> )
            
            
            
            : "No related posts..."
         }  

{/* 
         <ul className='seachsugg-ul'>
            <li className='seachsuggli'>
                <img className='srch_dp' src={imgone} alt="post_dp_1" />
                <div className='srch-posts' > Lorem ipsum dolor... </div>
                <div className='srch-cls-btn' ><CgClose /></div>
            </li>
            <li className='seachsuggli'>
                <img className='srch_dp' src={imgone} alt="post_dp_1" />
                <div className='srch-posts' > Lorem ipsum dolor... </div>
                <div className='srch-cls-btn' ><CgClose /></div>
            </li>
            <li className='seachsuggli'>
                <img className='srch_dp' src={imgone} alt="post_dp_1" />
                <div className='srch-posts' > Lorem ipsum dolor... </div>
                <div className='srch-cls-btn' ><CgClose /></div>
            </li>
            <li className='seachsuggli'>
                <img className='srch_dp' src={imgone} alt="post_dp_1" />
                <div className='srch-posts' > Lorem ipsum dolor... </div>
                <div className='srch-cls-btn' ><CgClose /></div>
            </li>
         </ul>
 */}
    </div>
  )
}

export default SearchSuggestion