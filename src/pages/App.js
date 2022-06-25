import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import Error from './Error';
import configureStore from 'src/redux/configureStore';

export default function App() {
	var store = configureStore();
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route exact path='/' element={<Main />}></Route>
					<Route path='*' element={<Error />}></Route>
				</Routes>
			</Router>
		</Provider>
	);
}
