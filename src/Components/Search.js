import '../css/search.css'
import '../index.css'
import { RiSearchLine } from "react-icons/ri";
import '../css/searchsuggestion.css'

const Search = ({ handlesearchtype, searchbarempty, headSrchIcon}) =>{

    return (
      <main className="search-main">
         <ul className="search-ul">
            <li className="search-bar">
                <input 
                   type="text"
                   placeholder='search posts...'
                   onChange={(e)=>handlesearchtype(e)}
                   value={searchbarempty}
                   ref={headSrchIcon} 
               />
            </li>
            <li className="search-btn">
                
               <RiSearchLine  className='srchbtnicon' />

            </li>
         </ul>
      </main>
    )

}

export default Search;