import '../../css/home-page/Nav.css'

// underline
export default function Nav () {
    return (
        <nav>
            <ul>
                <li><a href='www.google.com'>Get The app</a></li>
                <div className='side'>
                    <li><a href='#'className='nav-links' style={{color : 'white'}}>Investor Relations</a></li>
                    <li><a href='#'className='nav-links'>Add Restaurants</a></li>
                    <li><a href='#'className='nav-links'>Log in</a></li>
                    <li><a href='#'className='nav-links'>Sign Up</a></li>
                </div>
            </ul>
        </nav>
    )
}