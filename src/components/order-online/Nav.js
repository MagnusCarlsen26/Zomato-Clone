    import '../../css/order-online/Nav.css'
    import React from 'react'
    const Nav = ({setDelivery,setDining,deliver,dining}) =>{

        function deliverHandler() {
            setDelivery(true)
            setDining(false)
        }
        
        function diningHandler() {
            setDelivery(false)
            setDining(true)
        }


        console.log(`img/Order-Online/delivery-${deliver? "":"un"}colored`)
        return ( 
            <>
                <nav className='order-online-nav'>
                    <div style={{display:'flex',alignItems:'center'}}><img src='img/Order-Online/Zomato.webp'/></div>
                    <div className='data'>
                        <div className='location'>
                            <input placeholder={'Your location'}></input>
                        </div>
                    </div>
                    <button>Login</button>
                    <button>Sign Up</button>
                </nav>
                <p className='address'>Home &nbsp;  /  &nbsp; India  &nbsp;/ &nbsp;  Surat &nbsp;/</p>
                <div className='status'>
                    <div className='deliver-button' onClick={deliverHandler} style={{borderBottom: `2px solid ${deliver ? '#ef5262': '#f8f8f8' }`,paddingRight:20}}>
                        <div className='option-box' style={{borderRadius:'50%',backgroundColor: `${deliver ? '#fceec0': '#f8f8f8' }`,marginLeft:'20px' }}>
                            <img src={`img/Order-Online/delivery-${deliver? "":"un"}colored.webp`}/>
                        </div>
                        <p className='font' style={{color:`${deliver ? '#ef5262': '#262626' }`,display: 'flex',alignItems: 'center',fontSize: '1.5rem',marginLeft:'10px'}} >Delivery</p>
                    </div>
                    <div className='dinig-button' onClick={diningHandler} style={{borderBottom: `2px solid ${dining ? '#ef5262': '#f8f8f8' }`,paddingRight:20}}>
                        <div className='option-box' style={{borderRadius:'50%',backgroundColor: `${dining ? '#e5f3f3': '#f8f8f8' }` ,marginLeft:'20px'}}>
                            <img src={`img/Order-Online/dining-${dining? "colored.avif  ":"uncolored.webp"}`}/>
                        </div>
                        <p className='font' style={{color:`${dining ? '#ef5262': '#262626' }`,display: 'flex',alignItems: 'center',fontSize: '1.5rem',marginLeft:'10px'}}>Dining out</p>
                    </div>
                </div>
            </>

        )
    }

    export default Nav