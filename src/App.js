import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}
export default App;
