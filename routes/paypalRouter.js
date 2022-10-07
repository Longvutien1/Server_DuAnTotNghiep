import express from 'express'
import { getError, getSuccess, paypalPost } from '../controllers/paymentPaypal';

const paypalR = express.Router();

paypalR.post('/pay',paypalPost)
paypalR.get('/success', getSuccess)
paypalR.get('/error', getError)

export default paypalR