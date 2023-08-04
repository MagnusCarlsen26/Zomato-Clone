/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../../css/order-online/Top.css'
import inspiration from './assets/inspiration'
import topbrands from './assets/topbrands'
import { motion } from 'framer-motion'
import React from 'react'
import bestPlaces from './../home-page/assets/Collection/bestPlaces'

const Top = ({deliver,dining}) =>{
    const [shift,setShift] = React.useState(0)
    const [shift1,setShift1] = React.useState(0)

    const scroll = (dir) => {
        setShift( (item) => {
            if (dir==='left') {
                item = item + 196
            }
            else{
                item = item - 196
            }
            if (item>0) {
                item = 0
            }
            if (item<-196*3) {
                item = -196*3
            }
            console.log(item)
            return item
        })
    }
    const scroll1 = (dir) => {
        setShift1( (item) => {
            if (dir==='left') {
                item = item + 196
            }
            else{
                item = item - 196
            }
            if (item>0) {
                item = 0
            }
            if (item<-196*3) {
                item = -196*3
            }
            console.log(item)
            return item
        })
    }
    console.log(shift)
    const arr = inspiration.map( (item) => {
        return (
            <motion.div key={item.id}  className='foods' initial={{scale:0}} animate = {{x:shift,scale:1}} transition={{type:'tween',duration: 0.5}}>
                <img  src={`img/Order-Online/${item.name}.webp`}/>
                <p style={{textAlign: 'center'}}>{item.name}</p>
            </motion.div>
        )
    })
    const brands = topbrands.map( (item) => {
        return (
            <motion.div key={item.id}  className='foods' initial={{scale:0}} animate = {{x:shift1,scale:1}} transition={{type:'tween',duration: 0.5}}>
                <img  src={`img/Order-Online/top-brands/${item.name}.webp`}/>
                <p style={{textAlign: 'center'}}>{item.name}</p>
            </motion.div>
        )
    })
    
    const cards = bestPlaces.map( (item) => {
        return (
            <motion.div
                initial={{scale:0}}
                animate={{scale:1}}
                style={{backgroundImage: `url(${item.img})`}} 
                key={item.id} 
                className="card"
            >
                <div className='card-sheet'>
                    <p>{item.line}</p>
                    <p>{item.number} Places 🞂</p>
                </div>
            </motion.div>
        )
    })

    const diningOut = (
        <div style={{marginRight:200,marginLeft:200,marginTop:10,marginBottom:50,border:"1px solid black"}}>
            <div className='text' style={{backgroundImage: "assets/collection/img/local.webp"}}>
                <div>
                    <p className='title'>Collections</p>
                    <p className='abcd'>Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</p>
                </div>
                <a href='#' className='info'>All Collections in Surat 🞂</a>
            </div>
            <div className='cards'>{cards}</div> 
            <img style={{width:'100%'}} src='img/Order-Online/gold.avif' />
        </div>
    )
    const horiScroll = (
        <div style={{paddingRight:200,paddingLeft:200,paddingTop:10,paddingBottom:50,backgroundColor:'#f8f8f8'}}>
        <div className='inspiration'>
            <p>Inspiration for your first order</p>
        </div>
        <nav className='nav' style={{gridTemplateColumns: `repeat(${arr.length},196px)`}} >
            {shift ? <div className='scroll-button' style={{left:'0',cursor:'pointer'}} onClick={() => scroll('left')} ><p>{'<'}</p></div>: <></>}
            {arr}
            {shift>(-196*3) ? <div className='scroll-button' style={{right:0,cursor:'pointer'}} onClick={() => scroll('right')} ><p>{'>'}</p></div> : <></>}
        </nav>
        <h1 style={{marginTop: 40,marginBottom: 40}}>Top brands for you</h1>
        <nav className='nav' style={{gridTemplateColumns: `repeat(${arr.length},196px)`}} >
            {shift1 ? <div className='scroll-button' style={{left:'0',cursor:'pointer'}} onClick={() => scroll1('left')} ><p>{'<'}</p></div>: <></>}
            {brands}
            {shift1>(-196*3) ? <div className='scroll-button' style={{right:0,cursor:'pointer'}} onClick={() => scroll1('right')} ><p>{'>'}</p></div> : <></>}
        </nav>
    </div>
    )
    const ans = deliver ? horiScroll : diningOut
    return (
        <>
            {ans}
        </>   
    )
}

export default Top