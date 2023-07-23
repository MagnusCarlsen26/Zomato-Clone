import '../../css/home-page/Hero.css'
// import magnifyingGlass from './assets/magnifying-glass.svg'


export default function Hero() {
    return (
        <div className='hero'>
            <p className='heading'>Zomato</p>
            <p className='quote'>Discover the best food & drinks</p>
            <div className='data'>
                <div className='location'>
                    <input placeholder={'Your location'}></input>
                </div>
                <div className='search'>
                    <input placeholder={'Search for restaurant, cuisine or a dish'}></input>
                </div>
            </div>
        </div>
    )
}