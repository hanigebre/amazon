import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((product) => {
                <CheckOutProduct
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    hideButton
                />
            })}
            <CurrencyFormat
                renderText={(value) => {
                    <h3 className="order__total">Order Total: {value}</h3>
                }}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order