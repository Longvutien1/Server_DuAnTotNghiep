const express = require('express');
const paypal = require('paypal-rest-sdk');
const fs=require('fs');
const app = express();

// const item = [
//     {
//         "name": "item",
//         "sku": "item",
//         "price": "12.00",
//         "currency": "USD",
//         "quantity": 1
//     },
//     {
//         "name": "item1",
//         "sku": "item",
//         "price": "10.00",
//         "currency": "USD",
//         "quantity": 1
//     }
// ]
paypal.configure({
    'mode': 'sandbox', 
    'client_id': 'Aach_jzz-INLIFG6tkifgbfK8Ktzlsv2spUXmOHNqT54JsyZQuCzom5i_Cmm7gPPeM4Qq8-H8r0-y7p4',
    'client_secret': 'EH_Q77luedW_Rf0aOTs4XtomLSA7CFKrPhriB9MgHnqyUEG87RuYG3OsCflrC8SG7b_c-pQ6Jzp9amBX'
  });
  
  var total =0;
  // for(let i = 0;i<item.length;i++)
  // {
  //   total+=parseFloat(item[i].price)*item[i].quantity;
  // }
  
  app.get('/', function(req, res){
    res.render('index');
  });
  
 export const paypalPost =  (req, res) => {
  console.log(req.body);
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:8000/success",
          "cancel_url": "http://localhost:8000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": req.body
          },
          "amount": {
              "currency": "USD",
              "total": total.toString()
          },
          "description": "Hat for the best team ever"
      }]
  };
  
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log('cancle');
        console.log(error);
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
        console.log(JSON.stringify(payment));
        // res.redirect('/success')
    }
  });
  
  };
  
  export const getSuccess = async (req, res) => {
    console.log('789');
    const payerId = await req.query.PayerID;
    const paymentId = await req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": total.toString()
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
        //  res.render('cancle');
      } else {
          console.log(JSON.stringify(payment));
          // res.render('success');
      }
  });
  }
  export const getError = async (req, res) => {
    
  }