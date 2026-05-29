import React from 'react'
import assets from '../assets/assets'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const donate = () => navigate('/donate')

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2b2b2b] text-white ">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20">

        {/* SECTION 1 */}
        <div className="grid mt-10 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={assets.she3}
              alt="She Can Foundation"
              className="w-full max-w-[26rem] rounded-2xl shadow-xl transform transition duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              Our Story
            </h1>
            <p className="text-gray-300 leading-relaxed">
              She Can Foundation was founded by a group of individuals who shared
              a common vision of creating a world where every woman has the
              opportunity to thrive and succeed. The idea for the organization
              was born out of a desire to make a real difference in the lives of
              women in communities across the globe. We recognized that there
              are countless barriers that prevent women from reaching their full
              potential, and we wanted to create an organization that could help
              break down those barriers and provide women with the resources and
              support they need to succeed.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          {/* Text */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              What is She Can?
            </h1>
            <p className="text-gray-300 leading-relaxed">
              She Can Foundation is a non-profit organization dedicated to
              empowering women and creating a more equitable society. We provide
              support, resources, and training to women in communities across
              the globe, and we raise awareness of women's issues through
              advocacy campaigns and initiatives. We believe that every woman
              deserves the opportunity to thrive and succeed, regardless of her
              background or circumstances.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={assets.she2}
              alt="Empowering Women"
              className="w-full max-w-[26rem] rounded-2xl shadow-xl transform transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-4">
            Donate and Make a Difference
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your contribution helps us empower women, break barriers, and build
            a future where education and opportunity are accessible to all.
          </p>
          <button
            onClick={donate}
            className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 transition transform hover:scale-105"
          >
            DONATE NOW
          </button>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s ease forwards;
          }

          .animate-slide-up {
            animation: slideUp 1.2s ease forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default About