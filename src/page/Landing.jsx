import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Heroitem from '../component/Heroitem'
import Howitworks from '../component/Howitworks'
import Explore from '../component/Explore'

export default function Landing() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Heroitem/>
        <Howitworks/>
        <Explore/>
    </div>
  )
}
