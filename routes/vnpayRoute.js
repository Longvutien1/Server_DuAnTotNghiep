//  var express = require('express');
 import express from 'express'
 var router = express.Router();
// const { get_payment_url, post_payment_url, vppay_return, vnpay_idn, redirect_vnpay, addNewPayment } = require('../controllers/vnpayController');
import {  post_payment_url, vppay_return, vnpay_idn,  addNewPayment, getPayment } from '../controllers/vnpayController'


 router.post('/create_payment_url', post_payment_url);
 
 router.post('/vnpay_return', vppay_return);
 
 router.get('/vnpay_ipn', vnpay_idn);

 router.post('/payment', addNewPayment)
 
 router.get('/payment', getPayment)

 export default router;