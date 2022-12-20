

import './App.css';
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckOut from './Component/CheckOut/CheckOut'
import Login from './Component/Login/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Component/StateProvider/StateProvider';
import Payment from './Component/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from "./Component/Orders/Orders"
const promise= loadStripe(
	// *pk_test_
)

function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>

			<div className="App">
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/checkout' element={<><Header /><CheckOut /></>} />
					<Route path='/orders' element={<><Header /><Orders /></>} />
					<Route path='/' element={<><Header /><Home /></>} />
					<Route path='/payment' element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />

							</Elements>
						</>
					} />

				</Routes>
			</div>

		</Router>
	);
}

export default App;
