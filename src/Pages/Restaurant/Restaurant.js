import './Restaurant.css'
import React from 'react';
import {motion} from 'framer-motion'

const Restaurant = () => {

    return (
        <motion.div
            initial={{x:'100vw'}}
            animate={{x:0}}
            exit={{x:'-100vw'}}
            transition={{type:'tween'}}
        >
            <div>
                gt
            </div>
        </motion.div>
    )
} 
export default Restaurant