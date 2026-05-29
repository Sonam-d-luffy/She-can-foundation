import React, { useState } from 'react'
import { Menu, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets.js'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const loginPage = () => {
    navigate('/login')
  }
  const donate = () => navigate('/donate')
  const home = () => navigate('/')
  const join = () => navigate('/join')
  const about = () => navigate('/about')

  return (
    <div className="text-gray-200 pointer-events-none">

      {/* ===== LIGHT FLOATING GLASS NAVBAR ===== */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div
          className="
            h-12
            w-[70vw] max-w-3xl
            flex items-center justify-between px-3
            rounded-xl
            bg-white/5 backdrop-blur-2xl
            shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          "
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 rounded-lg hover:bg-white/15 transition"
            >
              <Menu size={18} />
            </button>

            <img
              src={assets.logo}
              className="h-7 rounded-md"
              alt="logo"
            />
          </div>

          <button
            onClick={loginPage}
            className="
              flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
              rounded-lg
              bg-white/10 hover:bg-white/20
              backdrop-blur-md
              transition
            "
          >
            <User size={14} />
            Login
          </button>
        </div>
      </header>

<aside
  className={`fixed top-0 left-0 z-40 h-screen w-64
  bg-white/10 backdrop-blur-xl
  shadow-[0_0_30px_rgba(0,0,0,0.4)]
  transform ${open ? 'translate-x-0' : '-translate-x-full'}
  transition-transform duration-300 pointer-events-auto`}
>
  {/* Spacer for navbar height */}
  <div className="h-16" />

  {/* NAV */}
  <nav className="p-4 flex flex-col gap-4">
    
    <button
      onClick={join}
      className="w-full px-6 py-3 rounded-full
      bg-gradient-to-r from-orange-500 to-[#111]
      hover:from-orange-600 hover:to-black
      transition shadow-md font-semibold text-center"
    >
      JOIN US
    </button>

    <button
      onClick={donate}
      className="w-full px-6 py-3 rounded-full
      bg-gradient-to-r from-orange-500 to-[#111]
      hover:from-orange-600 hover:to-black
      transition shadow-md font-semibold text-center"
    >
      DONATE
    </button>

    <button
      onClick={about}
      className="w-full px-6 py-3 rounded-full
      bg-gradient-to-r from-orange-500 to-[#111]
      hover:from-orange-600 hover:to-black
      transition shadow-md font-semibold text-center"
    >
      ABOUT US
    </button>

    <button
      onClick={home}
      className="w-full px-6 py-3 rounded-full
      bg-gradient-to-r from-orange-500 to-[#111]
      hover:from-orange-600 hover:to-black
      transition shadow-md font-semibold text-center"
    >
      HOME
    </button>

  </nav>
</aside>

{/* ===== MOBILE OVERLAY ===== */}
{open && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
    onClick={() => setOpen(false)}
  />
)}
    </div>
  )
}

export default Navbar