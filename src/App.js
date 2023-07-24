import HomePage from './Pages/HomePage/HomePage'
import OrderOnline from './Pages/OrderOnline/OrderOnline'
import Restaurant from './Pages/Restaurant/Restaurant'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    console.log(<HomePage/>)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/order-online' element={<OrderOnline/>} />
                <Route path='/restaurant' element={<Restaurant/>} />
            </Routes>
        </Router>
    );
}
export default App;
