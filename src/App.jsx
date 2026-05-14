import React from 'react'
import Hero from './components/Hero'
import CommingSoon from './components/Commingsoon'
import Direction from './components/Direction'
import CryptoCard from './components/CryptoCard'
import FooterSection from './components/FooterSection'
import Navbar from './components/navbar'

const App = () => {
  return (
    <main className=''>

      <Navbar />

      <img src="/stars-bg.png" className='fixed top-0 left-0 -z-10  w-full h-full ' alt="" />

      <div className="w-full  z-10 flex flex-col items-center justify-center">

        <Hero />

        <CommingSoon />

        <Direction />

        <CryptoCard />

        <FooterSection />

      </div>


    </main>
  )
}

export default App
