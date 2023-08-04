import Nav from '../../components/order-online/Nav'
import Top from '../../components/order-online/Top'
import Restaurants from '../../components/order-online/Restaurants'
import Footer from '../../components/home-page/Footer'
import Faq from '../../components/home-page/Faq'
import React from 'react'
import { motion } from 'framer-motion'
const OrderOnline = () => {
    
    const [deliver , setDelivery] = React.useState(true)
    const [dining , setDining] = React.useState(false)

    return (
        <motion.div intial={{x:'100vh'}} animate={{x:0}} exit={{x:'-100vh'}}             transition={{type:'tween'}} >
            <div style={{marginRight:200,marginLeft:200,marginTop:10}}>
                <Nav setDelivery={setDelivery} setDining={setDining} deliver={deliver} dining={dining}/>
            </div>
            <Top deliver={deliver} dining={dining}/>
            <Restaurants />
            <div style={{marginRight:200,marginLeft:200,marginTop:10}}>
                <Faq />
            </div>
                <Footer />
        </motion.div>
    )
}
export default OrderOnline;