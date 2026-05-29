import express from 'express'
import QRCode from "qrcode"
import Donation from '../schema/donation.js';

const router = express.Router();

const UPI_ID = process.env.UPI_ID;
const PAYEE = process.env.PAYEE;

router.post('/donate', async(req , res) => {
    try {
    let { amount } = req.body

    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' })
    }

    amount = Number(amount)

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' })
    }
     
           const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
      PAYEE
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent(
      'SHE'
    )}`

      const qrCode = await QRCode.toDataURL(upiLink)

      return res.status(200).json({message:'Qr generated',qrCode:qrCode})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Server Error'})
    }
})

router.post('/confirm-donation',async(req,res) => {
    try {
        const {name,email,transactionId,amount,phone} = req.body;
        if(!name || !email || !transactionId || !amount || !phone){
            return res.status(400).json({message: 'All fields are required'})
        }
        const donation = new Donation({
            name,email,transactionId,amount,phone,status:'SUCCESS'
        })
        await donation.save()
        return res.status(200).json({message:'Donation completed',donation:donation})
    } catch (error) {
        console.log(error)
        return res.status(500).json('Server Error')
    }
})

export default router