import React, { useState } from 'react'
import axios from 'axios'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Donate = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Generate QR
  const generateQr = async (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/donation/donate`,
        { amount }
      )
      setQrCode(res.data.qrCode)
      setMessage(res.data.message)
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Error generating QR')
    } finally {
      setLoading(false)
    }
  }

  // Confirm Donation
  const submitDonation = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const payload = {
        name,
        email,
        phone,
        amount,
        transactionId
      }

      const res = await axios.post(
        `${import.meta.env.VITE_URL}/donation/confirm-donation`,
        payload
      )

      alert(res.data.message)
      navigate('/')
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Donation failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2b2b2b] text-white px-4 py-6">
      <Navbar />

      {/* Campaign Heading */}
      <h1 className="mt-12 mb-8 text-center text-2xl md:text-3xl font-extrabold text-orange-500 leading-snug ">
        Her period should not end her education
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Header Image */}
        <div className="flex justify-center">
          <img
            src={assets.she3}
            alt="donate"
            className="w-full max-w-[28rem] rounded-2xl shadow-xl"
          />
        </div>

        {/* User Details + Amount */}
        <form
          onSubmit={generateQr}
          className="bg-[#111] p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-xl font-bold text-orange-400">
            Your Details
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-[#1f1f1f]"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-[#1f1f1f]"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 rounded-lg bg-[#1f1f1f]"
            required
          />

          <input
            type="number"
            placeholder="Donation Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-lg bg-[#1f1f1f]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-orange-500 to-orange-700"
          >
            {loading ? 'Generating QR...' : 'Generate QR'}
          </button>
        </form>

        {/* QR Section */}
        {qrCode && (
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4">
            <p className="text-gray-300 text-center">
              Scan the QR using any UPI app and complete the payment
            </p>

            <img
              src={qrCode}
              alt="QR Code"
              className="w-56 h-56 bg-white p-3 rounded-xl"
            />
          </div>
        )}

        {/* Transaction Confirmation */}
        {qrCode && (
          <form
            onSubmit={submitDonation}
            className="bg-[#111] p-6 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <h2 className="text-xl font-bold text-orange-400">
              Payment Confirmation
            </h2>

            <input
              type="text"
              placeholder="Transaction ID (after payment)"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="p-3 rounded-lg bg-[#1f1f1f]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-green-500 to-green-700"
            >
              {loading ? 'Submitting...' : 'Confirm Donation'}
            </button>
          </form>
        )}

        {/* Message */}
        {message && (
          <p className="text-center text-orange-400 font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Donate