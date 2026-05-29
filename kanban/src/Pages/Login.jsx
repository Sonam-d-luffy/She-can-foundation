import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../UserContext"

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(true)
  const [message, setMessage] = useState("")
  const {loginMode} = useUser()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")

    try {
      const res = login
        ? await axios.post(
            `${import.meta.env.VITE_URL}/user/login`,
            { email, password }
          )
        : await axios.post(
            `${import.meta.env.VITE_URL}/user/signup`,
            { name, email, password }
          )
loginMode(res.data.user, res.data.token);

      setMessage(res?.data?.message || "Success")
     
      setName('')
      setEmail('')
      setPassword("")
      alert(login ? 'login successful' : 'Signup successful')

      navigate(-1)

    } catch (error) {
      setMessage(error?.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-[#171717] border border-gray-800 rounded-xl p-6 shadow-xl">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          {login ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-gray-400 text-center text-sm mb-6">
          {login ? "Login to continue" : "Sign up to get started"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {!login && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-[#0f0f0f] text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-[#0f0f0f] text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-[#0f0f0f] text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />

          {/* Message */}
          {message && (
            <p className="text-sm text-center text-gray-300">
              {message}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {login ? "Log in" : "Sign up"}
          </button>
        </form>

        {/* Toggle */}
        <div className="mt-6 text-center text-sm text-gray-400">
          {login ? "Don’t have an account?" : "Already have an account?"}
          <button
            onClick={() => setLogin(!login)}
            className="ml-2 text-white hover:underline"
          >
            {login ? "Sign up" : "Log in"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login