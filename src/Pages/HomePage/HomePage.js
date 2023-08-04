import Nav from '../../components/home-page/Nav'
import Hero from '../../components/home-page/Hero'
import Collections from '../../components/home-page/Collections'
import Faq from '../../components/home-page/Faq'
import Footer from '../../components/home-page/Footer'
import './Homepage.css'
import { AnimatePresence,motion } from 'framer-motion'
const HomePage = () => {
    return (
            <motion.div
                initial={{x:'100vw'}}
                animate={{x:0}}
                exit={{x:'-100vw'}}
                transition={{type:'tween'}}
            >
                <div className='bg'>
                    <div className='sheet'>
                        <Nav />
                        <Hero />
                    </div>
                </div>
                <div className='two'>
                    <Collections />
                    <Faq />
                </div>
                    <Footer />
            </motion.div>

    )
}

export default HomePage