import { async } from '@firebase/util'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct'
import { useStateValue } from '../StateProvider/StateProvider'
import './Payment.css'
import axios from '../../axios'
import { dblClick } from '@testing-library/user-event/dist/click'
function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

    const stripe = useStripe();
    const Element = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?Total=${(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);
    console.log("THE SECRET IS >>>", clientSecret);


const handleSubmit = async (event) => {
    event.preventDefualt();
    setProcessing(true);
    const payload = await stripe
        .confirmCardPayment(clientSecret, {
            payment_method: {
                card: Elements.getElements(CardElement),
            },
        }).then(({ paymentIntent }) => {
            //paymentIntent= payment confirmation

            dblClick.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,

            });


            setSucceeded(true);
            setProcessing(false);
            setError(null);
            dispatch({
                type: 'EMPTY_BASKET',
            });
            navigate('/orders');
        });
       
}
const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '');
}
return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout {<Link to="/checkout">{basket?.length} items </Link>}
            </h1>
            <div className='payment__section'>
                <div className='payment__tittle'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 react Lane</p>
                    <p>Chicago, IL</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map((item) => (

                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__pricecontainer'>
                            <CurrencyFormat
                                renderText={(value) => <h3>Order Total: {value}</h3>}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSepartor={true}
                                prefix={'$'}

                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>

                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>


    </div>
)
}

export default Payment