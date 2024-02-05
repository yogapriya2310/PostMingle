import React, { useRef, useState } from "react"; 
import './index.css'  
import Header from './Components/Header'
import Nav from './Components/Nav' 
import Home from './Components/Home' 
import NewPost from './Components/NewPost' 
import PostPage from './Components/PostPage' 
import About from './Components/About'
import Missing from './Components/Missing' 
import Footer from './Components/Footer' 
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Post from './Components/Post'
import PageLayout from "./Components/PageLayout";
import sunpic from './images/hidden-face-poses-for-girls-girls-hidden-face-sun-set.jpg'
import babyboy from './images/introducing-baby.jpg'
import snowVaca from './images/couple-snow.jpg'
import coupleEngaement from './images/couple-engagement.jpg'
import familydiwali from './images/family-diwali-celebration.jpg'
import muslimEngagement from './images/muslim-couple-engagement.jpg'
import threeGen from './images/grandma-mom-daughter.jpg'
import guyPartying from './images/guy-partying.jpg'
import gymboy from './images/gym-guy-post.jpg'
import girlsnowhyking from './images/girl-snow-hiking.jpg'
import friendsOut from './images/friends-out.jpg'
import Search from "./Components/Search";
import SearchSuggestion from "./Components/SearchSuggestion";
import { format } from 'date-fns';

function App() {

  const [posts, setPosts] = useState([
    { id:1,
      time: 4,
      username: "i_am_sherin",
      dp: sunpic,
      post: sunpic,
      postTitle:"Chasing Sunsets: Embracing Moments of Serenity 🌅",
      postCaption:"Lost in the hues of the sunset, finding solace in the quiet whispers of nature. 🌸✨ #SunsetDreaming #NatureElegance"
    },
    { id:2,
      time: 5,
      username: "Rocky",
      dp: coupleEngaement,
      post: coupleEngaement,
      postTitle:"Forever Begins Now: Our Engagement Bliss 💍✨",
      postCaption:"Thrilled to announce the next chapter of our love story! 💑💕 Ringing in a lifetime of laughter, love, and endless adventures together. #EngagedAndBlessed #ForeverUs"
    },
    { id:3,
      time: 5,
      username: "Rahul_sham",
      dp: gymboy,
      post: gymboy,
      postTitle:"Strive for Progress, Not Perfection 💪✨",
      postCaption:"Sculpting dreams one curl at a time. 💥 Embrace the grind, celebrate the gains! #BicepGains #FitnessJourney"
    },
    { id:4,
      time: 5,
      username: "ramya_Dev",
      dp: familydiwali,
      post: familydiwali,
      postTitle:"Radiance of Togetherness: Diwali Celebrations with Family ✨🪔",
      postCaption:"Illuminating our hearts with love, laughter, and the glow of a thousand diyas. Wishing you all a joyous and blessed Diwali! 🎇🏡 #FamilyDiwali #FestivalOfLights"
    },
    { id:5,
      time: 5,
      username: "Jenifur",
      dp: girlsnowhyking,
      post: girlsnowhyking,
      postTitle:"Dancing with Snowflakes: A Winter Adventure ❄️👣",
      postCaption:"Finding beauty in every step, embracing the winter magic on a snowy hiking escapade. Nature's wonderland at its finest! 🌨️🏞️ #SnowHiking #WinterWonderland"
    },
    { id:6,
      time: 5,
      username: "Gowthami",
      dp: threeGen,
      post: threeGen,
      postTitle:"Generations of Love: Grandma, Mom, and Our Little Princess 👵👩👶",
      postCaption:"A beautiful tapestry of love, wisdom, and innocence. Three generations, one heartwarming bond. 💖✨ #FamilyLegacy #ThreeGenerationsStrong"
    },
    { id:7,
      time: 5,
      username: "Akash_Kumar",
      dp: guyPartying,
      post: guyPartying,
      postTitle:"Groove Mode: Unleashing the Dance Floor Magic! 🕺🎉",
      postCaption:"Lost in the rhythm, chasing joy one dance step at a time. Let the music set you free! 🎶💃 #DanceAllNight #PartyVibes"
    },
    { id:8,
      time: 5,
      username: "sam_Wow_life",
      dp: babyboy,
      post: babyboy,
      postTitle:"Hello World, Meet Our Little Prince! 👑👶",
      postCaption:"With hearts full of love and joy, we introduce you to our precious baby boy, [Baby's Name]! 💙✨ #BlessedWithABabyBoy #ParenthoodAdventure"
    },
    { id:9,
      time: 5,
      username: "_niha_rika",
      dp: friendsOut,
      post: friendsOut,
      postTitle:"Reunion of Souls: Friends Meet Up 🤝🌟",
      postCaption:"Laughter, memories, and a sprinkle of joy. Cherishing the moments that make friendship timeless. 🥂👫 #FriendshipGoals #MemoriesInTheMaking"
    },
    { id:10,
      time: 5,
      username: "gowtham_s",
      dp: snowVaca,
      post: snowVaca,
      postTitle:"Escape to Paradise: Our Romantic Getaway 🌴💑",
      postCaption:"Sunset strolls, beach dreams, and the company of my favorite person. Making memories that will last a lifetime. ☀️🏝️ #CoupleGoals #VacationBliss"
    },
  ])
 

  // const postone = posts[0]
  const [searchposts, setSearchposts] = useState([])
  const [searchbarempty , setsearchbarempty] =useState()
  const [addimage, setAddimage] = useState('')
  const [addPostTitle, setAddPostTitle] = useState("")
  const [addPostCaption, setAddPostCaption] = useState("")
  const currentDateTime = new Date();
  const headSrchIcon = useRef(null);

  const navigate = useNavigate()

  const handlesearchtype = (e)=>{
      navigate("/search")
      const search_val = e.target.value
      const searchedpost = posts.filter((post)=> ((post.postTitle).toLowerCase()).includes(search_val.toLowerCase()) && e.target.value!=="")
      setSearchposts(searchedpost)
  }

  const handleAddnewpostchange =(e)=>
  {
    // console.log(e.target.files)
    const newimagefile = e.target.files[0]
    if (newimagefile) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddimage(reader.result);
      };
      reader.readAsDataURL(newimagefile);
    } else {
      setAddimage(null);
    }
  } 

  const handleAddPostTitleChange =(e) =>{
      const newPostTitle = e.target.value;
      setAddPostTitle(newPostTitle)
  } 

  const handleAddPostcaptionChange =(e) =>
  {
     const newPostCaption = e.target.value;
    setAddPostCaption(newPostCaption)  
   
  }
  
   const handlenewpostsubmit =(e) =>{
   
     const lastpostindex = posts.length-1
    const lastpostid = posts[lastpostindex].id
    const id = posts.length? lastpostid + 1  : 1
    const formattedDateTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss');

    const updatedPosts = 
      [...posts,
        { id:id,
        time: formattedDateTime,
        username: `user_name${id}`,
        dp: addimage,
        post: addimage,
        postTitle:addPostTitle,
        postCaption:addPostCaption ? addPostCaption : "bla bla"
        }
      ]  
        setPosts(updatedPosts)
      // console.log(`${addPostTitle} -and - ${addPostCaption} -- ${addimage}`)
      setAddPostTitle("")
      setAddPostCaption("")
      setAddimage('')
      navigate('/')
  }  

  const scrollToTopHome =()=>{
      navigate('/')
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleHeaderSearchIconClick = () =>
  {
    if (headSrchIcon.current) {
      headSrchIcon.current.focus();
    }
  }

  

  return (
    <div className="app">
     <Header  title="PostMingle"
         scrollToTopHome={scrollToTopHome}
         handleHeaderSearchIconClick={handleHeaderSearchIconClick}
     />
     <Nav  />
     <Search 
        handlesearchtype={handlesearchtype}
        searchbarempty={searchbarempty}
        headSrchIcon={headSrchIcon}
        />
     <Routes >
       <Route path="/" element={< Home posts={posts}   />} />
       <Route path="/about" element={ <About /> } />
       <Route path="/*" element={ <Missing /> } />
       <Route path="/search" element={<SearchSuggestion searchposts={searchposts} />  }/>
        <Route 
           path="/postpage" 
           element={<PageLayout 
                       />}  
                      
                    >
          <Route index element={
             <PostPage  
                
                  addPostTitle={addPostTitle}
                  addPostCaption={addPostCaption} 
                  handleAddnewpostchange = {handleAddnewpostchange}
                  handleAddPostTitleChange = {handleAddPostTitleChange} 
                  handleAddPostcaptionChange = {handleAddPostcaptionChange}
                  handlenewpostsubmit={handlenewpostsubmit}
               />} />
          <Route path="newpost" element={<NewPost />} />
          <Route path=":id" element={<Post/>} />
        </Route>
     </Routes>  
      {/* <Nav  />
      <Home posts={posts} />  
      <About />
      <Missing /> */}
    </div>
  )
}

export default App;

{/* <Routes>
<Route path="/" element={< Home/>} />
<Route path="/about" element={<About />} />
<Route path="/postpage" element={<PageLayout />}    >
  <Route index element={<PostPage />} />
  <Route path="newpost" element={<NewPost />} />
  <Route path=":id" element={<Post/>} />
</Route>
<Route path="*"  element={<Missing /> } />
</Routes> */}