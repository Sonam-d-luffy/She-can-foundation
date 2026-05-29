import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import assets from '../assets/assets.js'

const Layout = () => {
  const navigate = useNavigate()

  const about = () => navigate('/about')
  const donate = () => navigate('/donate')
  const join = () => navigate('/join')

  const cards = [
    { image: assets.she2, title: 'Support Women Empowerment' },
    { image: assets.she3, title: 'They are the future' },
    { image: assets.she4, title: 'Educate Every Child' },
  ]

  return (
    <div className="text-white pt-24 sm:pt-20 flex flex-col items-center gap-8 sm:gap-10 overflow-x-hidden">

      {/* Buttons */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          flex flex-wrap justify-center gap-3 sm:gap-6 px-4
        "
      >
        {[about, donate, join].map((fn, i) => {
          const labels = ['About', 'Donate', 'JOIN US']
          return (
            <button
              key={i}
              onClick={fn}
              className="
                px-4 sm:px-6 py-2
                text-sm sm:text-base
                rounded-full
                bg-gradient-to-r from-orange-500 to-[#111]
                hover:from-orange-600 hover:to-black
                transition shadow-md font-semibold
                whitespace-nowrap
              "
            >
              {labels[i]}
            </button>
          )
        })}
      </motion.nav>

      {/* Hero Section */}
      <div className="relative flex justify-center w-full px-3 sm:px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[48rem]"
        >

          {/* Image */}
          <img
            src={assets.she1}
            alt="hero"
            className="
              w-full
              h-[220px] sm:h-[320px] md:h-[420px]
              object-cover
              rounded-xl sm:rounded-2xl
              shadow-xl
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl"></div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              absolute top-3 left-3 sm:top-6 sm:left-6
              text-sm sm:text-xl md:text-3xl
              font-bold text-white
              z-10 max-w-[85%]
              drop-shadow-lg
            "
          >
            Together We Can Make a Difference
          </motion.h1>

          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.button
              onClick={donate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-5 sm:px-8 py-2 sm:py-3
                text-sm sm:text-base
                rounded-full font-bold text-black
                bg-gradient-to-r from-orange-500 to-white
                shadow-lg
              "
            >
              Get Started
            </motion.button>
          </div>

        </motion.div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="
                  w-full
                  h-36 sm:h-52 md:h-64
                  object-cover
                  rounded-xl sm:rounded-2xl
                  shadow-lg
                "
              />

              <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl"></div>

              <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-2 sm:px-3">
                <h2 className="text-sm sm:text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Layout