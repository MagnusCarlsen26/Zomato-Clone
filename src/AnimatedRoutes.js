import { Route,Routes, useLocation } from "react-router"
import HomePage from './Pages/HomePage/HomePage'
import OrderOnline from './Pages/OrderOnline/OrderOnline'
import Restaurant from './Pages/Restaurant/Restaurant'
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation()
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path='/order-online' element={<OrderOnline/>} />
                <Route path='/restaurant' element={<Restaurant/>} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes