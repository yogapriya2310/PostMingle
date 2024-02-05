import React from 'react'
import '../css/about.css'
import guycamping from '../images/selfies/guy-camping.jpg'
import guycoolas from '../images/selfies/guy-with-blue-coolas.jpg'
import grupOfFriends from '../images/selfies/group-of-friends.jpg'
import oldWoman from '../images/selfies/old-women-yellow-tees.jpg'

const About = () => {
  return (
    <main className='aboutmain'>
      <ul className='about-caption-one'>
        <li>Give people the power to build community</li>
        <li><img className='about-img-one' src={grupOfFriends} alt="group of friends" />
        </li>
      </ul>


      <ul className='about-caption-two' >
        <li><img className='about-img-two' src={guycamping} alt="" /></li>
        <li>and bring the world closer together!!</li>
      </ul>
        
    </main>
  )
}

export default About