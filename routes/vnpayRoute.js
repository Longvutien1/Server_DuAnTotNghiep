 var express = require('express');
 var router = express.Router();
 var $ = require('jquery');
const { get_payment_url, post_payment_url, vppay_return, vnpay_idn, redirect_vnpay } = require('../controllers/vnpayController');
 
//  router.get('/', function(req, res, next){
//      res.render('orderlist', { title: 'Danh sách đơn hàng' })
//  });
 
//  router.get('/create_payment_url', get_payment_url);

 router.post('/create_payment_url', post_payment_url);
 
 router.get('/vnpay_return', vppay_return);
 
 router.get('/vnpay_ipn', vnpay_idn);

//  router.get('/redirect_vnpay', post_payment_url)
 export default router;