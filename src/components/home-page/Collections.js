import '../../css/home-page/Collections.css'
import bestPlaces from './assets/Collection/bestPlaces'
import popularLocalities from './assets/Collection/popularLocalities'
import React from 'react'
import { type } from '@testing-library/user-event/dist/type'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Collections() {

    const cards = bestPlaces.map( (item) => {
        return (
            <div style={{backgroundImage: `url(${item.img})`}} 
                key={item.id} 
                className="card"
            >
                <div className='card-sheet'>
                    <p>{item.line}</p>
                    <p>{item.number} Places 🞂</p>
                </div>
            </div>
        )
    })

    var places = popularLocalities.map( (item) => {
        return (
            <AnimatePresence>
                <motion.div 
                    className='place'

                >
                        <div>
                            <p className='inc-font'>{item.location}</p>
                            <p className='color-change'>{item.number} Places</p>
                        </div>
                    <p className='arrow'>🞂</p>
                </motion.div>
            </AnimatePresence>
        )
    })
    console.log(type(places))
    const handler = () => setCount(!count)
    const [count,setCount] = React.useState(true )
    
    places = count ? places.slice(0,8) : places
    places.push(
        <div className='place' onClick={handler}>
            <p>{count ? 'see more': 'see less'}</p>
        </div>
    )
    return (
        <div className='heading-collections'>
            <div className='options'>
                <div className='option'>
                    <Link to='order-online'>
                        <img src='img/collection/order-online.webp'/>
                    </Link>
                    <div className='optio-text'>
                        <p className='heading-d'>Order Online</p>
                        <p className='dees'>Stay home and Order to your doorstep </p>
                    </div>
                </div>
                <div className='option'>
                    <img src='img/collection/dining1.webp'/>
                    <div className='optio-text'>
                        <p className='heading-d'>Dining</p>
                        <p className='dees'>View the city's favourite venues </p>
                    </div>
                </div>                
                <div className='option'>
                    <img src='img/collection/night-life.webp'/>
                    <div className='optio-text'>
                        <p className='heading-d'>Night life and clubs</p>
                        <p className='dees'>Explore the city's night life Outlets</p>
                    </div>
                </div>
            </div>
            <div className='text' style={{backgroundImage: "assets/collection/img/local.webp"}}>
                <div>
                    <p className='title'>Collections</p>
                    <p className='abcd'>Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</p>
                </div>
                <a href='#' className='info'>All Collections in Surat 🞂</a>
            </div>

            <div className='cards'>{cards}</div> 
            <div className='places'>{places}</div>
        </div>
    )
}