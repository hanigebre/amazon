import { dblClick } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'
// import { db } from '../../firebase';
import Order from '../Order/Order';
import { useStateValue } from '../StateProvider/StateProvider';
import './Orders.css';

function Orders() {
    const[{basket,user}, dispatch]=useStateValue();
    const[orders,setOrders]=useState();
    // useEffect(()=>{
    //     if(user){
    //         db.Clickscollection("users")
    //         .doc(user?.uid)
    //         .collection("orders")
    //         .orderBy('created', 'desc')
    //         .onSnapshot((snapshot)=>
    //         setOrders(
    //             snapshot.docs.map((doc)=>({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         ));
    //     }else{
    //         setOrders([])
    //     }
    // }, [user]);
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders?.map((order)=>{
                    <Order order={order}/>
                })}
            </div>
        </div>
    )
}

export default Orders