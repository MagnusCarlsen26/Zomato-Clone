import Nav from '../../components/order-online/Nav'
import Top from '../../components/order-online/Top'
import Restaurants from '../../components/order-online/Restaurants'
import Footer from '../../components/home-page/Footer'
import Faq from '../../components/home-page/Faq'
import React from 'react'
const OrderOnline = () => {
    const [deliver , setDelivery] = React.useState(true)
    const [dining , setDining] = React.useState(false)


    return (
        <>
            <div style={{marginRight:200,marginLeft:200,marginTop:10}}>
                <Nav setDelivery={setDelivery} setDining={setDining} deliver={deliver} dining={dining}/>
            </div>
            <Top deliver={deliver} dining={dining}/>
            <Restaurants />
            {/* <Faq />
            <Footer /> */}
        </>
    )
}
export default OrderOnline;