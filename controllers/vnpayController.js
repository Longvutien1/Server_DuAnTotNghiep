// Post URL
import Vnpayment from '../models/vnpayment';
export const post_payment_url =  (req, res, next) => {
        var ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        var dateFormat = require('dateformat');
        var tmnCode = "RIFPZ1EZ";
        var secretKey = "ZUNQVVDFXRBTMTYBUGAAPIOBHQQZIHSS";
        var vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        var returnUrl = "http://localhost:3000/payment/vnpay_return";
        var date = new Date();
    
        var createDate = dateFormat(date, 'yyyymmddHHmmss');
        var orderId = dateFormat(date, 'HHmmss');
        var amount = req.body.price;
        var bankCode = req.body.bank;
        var orderInfo = req.body.content;
        var orderType = "billpayment";
        var locale = "vn";
        if(locale === null || locale === ''){
            locale = 'vn';
        }
        var currCode = 'VND';
        var vnp_Params = {};
        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = orderInfo;
        vnp_Params['vnp_OrderType'] = orderType;
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;
        if(bankCode !== null && bankCode !== ''){
            vnp_Params['vnp_BankCode'] = bankCode;
        }
    
        vnp_Params = sortObject(vnp_Params);
        var querystring = require('qs');
        var signData = querystring.stringify(vnp_Params, { encode: false });
        var crypto = require("crypto");     
        var hmac = crypto.createHmac("sha512", secretKey);
        var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex"); 
        vnp_Params['vnp_SecureHash'] = signed;
        const data =  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

       res.json(data)    
}

// Return
export const vppay_return =  (req, res, next) => {
    var vnp_Params = req.body;
    console.log("ungtest",vnp_Params);
    var secureHash = vnp_Params.vnp_SecureHash;

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    var secretKey =  "ZUNQVVDFXRBTMTYBUGAAPIOBHQQZIHSS";
    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });

    var crypto = require("crypto");     
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     
    console.log("Signed", signed);
    if(secureHash === signed){
        res.json(vnp_Params);
    } else{
        res.json({code: '97'});
    }

}

// vnpay_ipn
export const vnpay_idn =  (req, res, next) => {
    var vnp_Params = req.query;
    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    var config = require('config');

    var secretKey = "ZUNQVVDFXRBTMTYBUGAAPIOBHQQZIHSS";
    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");     
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     
     

    if(secureHash === signed){
        var orderId = vnp_Params['vnp_TxnRef'];
        var rspCode = vnp_Params['vnp_ResponseCode'];
        //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        res.status(200).json({RspCode: '00', Message: 'success'})
    }
    else {
        res.status(200).json({RspCode: '97', Message: 'Fail checksum'})
    }
}

function sortObject(obj) {
    var sorted = {};
    var str = [];
    var key;
    for (key in obj){
        if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

export const addNewPayment = async (req, res) =>{
    try {
        const pay = await Vnpayment(req.body).save();
        res.json(pay)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}