import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const Join = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2b2b2b] text-white">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate('/')}
          className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate('/donate')}
          className="
            px-6 py-2
            rounded-full
            font-bold
            bg-gradient-to-r from-orange-500 to-orange-700
            hover:from-orange-600 hover:to-orange-800
            transition
            shadow-md
          "
        >
          Donate Now
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">

    {/* Image */}
{/* Images Section */}
<div className="w-full flex justify-center">
  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    gap-6
    place-items-center
  ">

    <img
      src={assets.she5}
      alt="campaign"
      className="
        w-full
        max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]
        rounded-2xl
        shadow-lg
        object-cover
      "
    />

    <img
      src={assets.she6}
      alt="campaign"
      className="
        w-full
        max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]
        rounded-2xl
        shadow-lg
        object-cover
      "
    />

    <img
      src={assets.she7}
      alt="campaign"
      className="
        w-full
        max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]
        rounded-2xl
        shadow-lg
        object-cover
      "
    />

  </div>
</div>
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-200">

          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            Her Period Shouldn’t End Her Education
          </h1>

          <p>
            Every month, millions of girls miss school—not because they want to,
            but because they cannot afford something as basic as sanitary pads.
            Shame, health risks, and silence slowly push them out of classrooms.
          </p>

          <p>
            In India, 1 in 5 girls drops out of school due to lack of menstrual
            hygiene. This isn’t just a health issue—it’s an education and dignity
            crisis.
          </p>

          <p>
            Through free sanitary pads, awareness programs, and dignity kits,
            <span className="text-white font-semibold"> She Can Foundation </span>
            has already helped over <span className="text-orange-400 font-bold">1,20,000+</span> girls.
            But many more are still waiting.
          </p>

          <p className="font-semibold text-white">
            Your donation is not charity—it’s a lifeline.
          </p>

          <p>
            A small contribution today can keep a girl healthy, confident,
            and in school. Be the reason she dreams again.
          </p>

        </div>

        {/* Bottom Donate Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => navigate('/donate')}
            className="
              px-10 py-3
              rounded-full
              text-lg
              font-bold
              bg-gradient-to-r from-orange-500 to-orange-700
              hover:from-orange-600 hover:to-orange-800
              transition
              shadow-lg
              hover:scale-105
            "
          >
            Donate Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default Join