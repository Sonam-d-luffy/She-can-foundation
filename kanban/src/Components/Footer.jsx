import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer
      className="
        mt-20
        bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200
        text-black
        py-12
        px-4
      "
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">

        {/* Logo */}
        <img
          src={assets.logo}
          alt="She Can Foundation Logo"
          className="
            w-20 h-20
            object-contain
            transition-transform duration-300
            hover:scale-110
          "
        />

        {/* Foundation Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          She Can Foundation
        </h2>

        {/* Founder */}
        <p className="text-base md:text-lg font-bold">
          Founder: <span className="font-extrabold ">Reeta Mishra</span>
        </p>

        {/* Phone */}
        <p className="text-base md:text-lg font-bold">
          Phone: <span className="font-extrabold">+91 8283841830</span>
        </p>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/_shecanfoundation_"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-2
            flex items-center gap-3
            text-base md:text-lg
            font-extrabold
            hover:text-orange-800
            transition-all duration-300
            hover:scale-105
          "
        >
          <img
            src={assets.instagram}
            alt="Instagram"
            className="w-6 h-6"
          />
          @_shecanfoundation_
        </a>

        {/* Divider */}
        <div className="w-full max-w-md h-[1px] bg-black/30 my-3"></div>

        {/* Copyright */}
        <p className="text-sm font-semibold text-black/70">
          © {new Date().getFullYear()} She Can Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer