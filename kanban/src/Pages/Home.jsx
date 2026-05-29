import React from 'react'
import Navbar from '../Components/Navbar'
import Layout from '../Components/Layout';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#1c1c1c]">
      <Navbar />
      <Layout/>
      <Footer/>
    </div>
  )
}

export default Home