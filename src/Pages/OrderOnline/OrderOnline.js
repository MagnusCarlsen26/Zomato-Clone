import Nav from '../../components/order-online/Nav'
import Top from '../../components/order-online/Top'
import Restaurants from '../../components/order-online/Restaurants'
import Footer from '../../components/home-page/Footer'
import Faq from '../../components/home-page/Faq'
const OrderOnline = () => {
    return (
        <>
            <div style={{marginRight:200,marginLeft:200,marginTop:10}}>
                <Nav />
            </div>
            <Top />
            <Restaurants />
            {/* <Faq />
            <Footer /> */}
        </>
    )
}
export default OrderOnline;