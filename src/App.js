import HomePage from './Pages/HomePage/HomePage'
import OrderOnline from './Pages/OrderOnline/OrderOnline'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    console.log(<HomePage/>)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/order-online' element={<OrderOnline/>} />
            </Routes>
        </Router>
    );
}
export default App;
