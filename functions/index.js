const functions = require("firebase-functions");

const express= require('express')
const cors = require('cors')
const stripe= require('stripe')();


// - App config
const app = express();


// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response)=>response.status(200).send('hello world'));
app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log("Payment Requst Recieved for this amount >>>", total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    //ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//


// - Listen command
exports.api= functions.https._onRequestWithOptions(app);

// http://127.0.0.1:5001/e-clonned/us-central1/api