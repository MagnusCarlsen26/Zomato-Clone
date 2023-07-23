import '../../css/order-online/Restaurants.css'
import restaurants from './assets/restaurants' 
import cuisineType from './assets/cuisine'
import React, { useEffect }  from 'react'


const Restaurants = () =>{
    
    const [cuisineHandler,setCuisineHandler] = React.useState(false)
    const [checkedCuisine,setCheckedCuisine] = React.useState(new Array(cuisineType.length).fill(0))
    const [extra,setExtra] = React.useState(<></>)
    const [apply,setApply] = React.useState(0)
    const [number,setNumber] = React.useState(0)
    const [sortRating,setSortRating] = React.useState(false)


    const cuisineList = cuisineType.map( (item,index) => {
        return(
            <div key={index} className='cuisine-drop-down' >
                <div className='xxx'><input
                type='checkbox'
                className='checkbox'
                checked={checkedCuisine[index]}
                onChange={() =>
                    setCheckedCuisine((item) => {
                    const updatedChecked = [...item];
                    updatedChecked[index] = !updatedChecked[index];
                    return updatedChecked;
                    })
                }
                />
                </div>
                <span style={{color: 'rgb(36 32 32 / 44%)',fontSize:'1.2rem'}}>{item}</span>
          </div>
        )
    } )

    const Cuisine = () => {
        return (
            <>
            <div className='cuisine-sort' >
                <p style={{fontSize:'2.4rem',fontWeight:'500'}}>Cuisine</p>
                <div className='searches'>
                    <input  placeholder={'Search for restaurant, cuisine or a dish'}></input>
                </div>
                <div className='cuisineList'>
                    {cuisineList}
                </div>
                <div style={{display:'flex',justifyContent:'space-between',paddingTop: 20,paddingBottom: 20}}>
                    <span className='span' style={{backgroundColor:"#eee",color:"#282828"}} onClick={() => {setCheckedCuisine( () => new Array(cuisineType.length).fill(false))}}>Clear all</span>
                    <span className='span' style={{backgroundColor:"#ef4f5f",color:"#fff"}} onClick={() => {setCuisineHandler( (item) => {console.log(apply);return !item;} ) ;setApply((apply)=>(apply+1)) }}>Apply</span>
                </div>
            </div>
            </>

        )
    }
    useEffect( () => {
        var c = 0
        const t = checkedCuisine.map( (item,index) => { if (item)  { c=c+1;return(<div className='filter text-center' style={{backgroundColor:'#ef4f5f',color:'#fff'}} key={index}><p>{cuisineType[index]}</p></div>)}; } )
        setExtra(t)
        setNumber(c)
    },[apply])    

    const safety = (number) => {
        return(
            <>
                <hr style={{marginTop: '10px'}}></hr>
                <img src={`img/Order-Online/restaurants/${number}.webp`} />
                <p>{number==1 ? 'Restaurant partner follows all WHO protocls' : 'Follow all Max safety measures to ensure your food is safe'}</p>
            </>
        )
    }
    const rating = (number) => {
        return (
            <div className='rating'>
                <p>{number}&nbsp;</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-">
                <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                </svg>
            </div>
        )
    }
    var i = 0;
    const arr = []
    const sumOfCheckedCuisine = checkedCuisine.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    var scanned = []
    while(i<restaurants.length) {
        var j = 0;
        while(i<restaurants.length && j<3) {
            var item = restaurants[i]
            var istrue = false
            if (sumOfCheckedCuisine) {

                for(var k =0;k<checkedCuisine.length;k++) {
                    if (!checkedCuisine[k]) {continue}
                    if(item.Cuisine.includes(cuisineType[k])) {
                        console.log(item.name)
                        console.log(item.Cuisine)
                        console.log(cuisineType[k])
                        istrue = true
                    }
                }
                if (istrue) {scanned.push(i)}   
            }
            i++
            j++
        }
    }

    var include = []
    if (!sumOfCheckedCuisine) {
        for(var i = 0 ; i<restaurants.length ; i++ ) {
            if (!scanned.includes(i)) {include.push(i)}
        }
    }
    else{
        console.log(scanned)
        include = scanned
    }

    if (sortRating) {
        var temp = []
        for(var i = 0;i<include.length;i++) {
            if(restaurants[include[i]].Rating>=4) {
                temp.push(include[i])
            }
        }
        include = temp
    }

    var i = 0
    while(i<include.length) {
        const tempArr = []
        var j = 0;
        while(i<include.length && j<3) {

            console.log(scanned[i])
            var item = restaurants[include[i]]
            console.log(item)
            var t = (<div key={i} className='restaurant-card'>
                            <img src={`img/Order-Online/restaurants/${item.name}.webp`} />
                            <div className='resto-info' style={{gridTemplateColumns: '88% 12%',marginBottom:7}}>
                                <p style={{fontSize:'1.3rem',fontWeight:'bold'}}>{item.name}</p>
                                {rating(item.Rating)}
                            </div>
                            <div className='resto-info' style={{color:'rgb(105 105 105)' ,marginBottom:7, gridTemplateColumns:'75% 25%'}}>
                                <p>{item.Cuisine}</p>
                                <p style={{textAlign:'right'}}>&#8377;{item.AverageCost} for one</p>
                            </div>
                            <p style={{textAlign:'right',color:'rgb(54, 54, 54)'}}>{item.AverageTime} min</p>
                            {item.Delivery ? <hr style={{marginTop: '10px'}}></hr>: <></>}
                            <div className='safety' style={{marginBottom:7}} >
                                { item.Delivery ?  safety(item.Delivery) : <></>  }
                            </div>
                        </div>)
            tempArr.push(t)
            i++
            j++
        }
        arr.push(
            <div className='restaurant-column'>
                {tempArr}
            </div>
        )
    }

    return (
        <>
            <div className='sticky-filters'>
                <div className='filters'  style={{marginRight:200,marginLeft:200,marginTop:10,marginBottom:20,paddingTop:20}}>
                    <div className='filter text-center'>
                        { number ? <p style={{backgroundColor:'#ef4f5f',color:'#fff',padding: '2px 7px',borderRadius:5}}>{number}</p> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ">
                                <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
                            </svg>
                        }   
                        <p style={{marginLeft:4}}>Filters</p>
                    </div>
                    {extra}
                    <div className='filter text-center' style={{backgroundColor:`${sortRating?'#ef4f5f':'#fff'}`,color:`${sortRating? "#fff":'rgb(156, 156, 156)'}`}} onClick={() => setSortRating( (item) => !item )}><p>Rating 4.0+</p></div>
                    <div style={{position:'relative'}} >
                        <div className='filter cuisine-option-sort' onClick={() => {setCuisineHandler(()=>!cuisineHandler) }}>
                            <p>Cuisines</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
                        </div>
                        {cuisineHandler? Cuisine() : <></> }
                    </div>
                </div>
                <hr></hr>
            </div>
            <div style={{marginRight:200,marginLeft:200,marginTop:10,marginBottom:50}}>
                <div className='restaurant-cards' >
                    {arr}
                </div>
            </div>


            
            
        </>
    )
}


export default Restaurants