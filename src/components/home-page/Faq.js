import '../../css/home-page/Faq.css'
import faq from './assets/Faq/Faq'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Faq() {

    const [show,setShow] = React.useState([false,false,false])    
    const toggleAnswer = (index) => {
        setShow((prevShow) => {
          const updatedShow = [...prevShow]; // Create a new array to avoid modifying the original state directly
          updatedShow[index] = !updatedShow[index];
          return updatedShow;
        });
      };
      

    // vim
    const cards = faq.map( (item,index) => {
        const angle = show[index] ? -90 : -90
        return (
          <motion.div
          initial = {{x:'-100vw'}} 
          animate = {{x:'0'}} 
          transition={{
            type: 'spring'  ,
            stiffness : 100,
            damping : 20
          }}
        >
            <div className='faq-card'>
                <div>
                  <div className='faq-card-flex' onClick={() => toggleAnswer(index)}>
                    <h2 className='question' >{item.Q} </h2>
                    <div className='rotate-icon' >🞂</div>
                  </div>
                </div>
              
              <AnimatePresence>
                {show[index] &&<div className='bla-bla'>
                  <motion.p initial={{ height: 0 }}
                                            animate={{ height: 'auto'}}   
                                            transition={{duration: 0.3,ease: 'easeIn'}} 
                                            exit={{height:0}}
                                            className='answer'>{item.A}</motion.p>
                </div>}
              </AnimatePresence>
            </div>
            </motion.div>
        )
    })

    return (
        <div>
            <h1 className='padding'>Explore options near me</h1> 
            <div className='faq'>{cards}</div>
        </div>
    )
}