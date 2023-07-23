import Nav from '../../components/home-page/Nav'
import Hero from '../../components/home-page/Hero'
import Collections from '../../components/home-page/Collections'
import Faq from '../../components/home-page/Faq'
import Footer from '../../components/home-page/Footer'
import './Homepage.css'

const HomePage = () => {
    return (
        <>
            <div className='bg'>
                <div className='sheet'>
                    <Nav />
                    <Hero />
                </div>
            </div>
            <div className='two'>
                <Collections />
                <Faq />
                <Footer />
            </div>
        </>
    )
}
console.log(HomePage)
export default HomePage