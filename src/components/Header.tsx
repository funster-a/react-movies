import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <div>
            <Link to='/'>
                
                StreamVibe
            </Link>
            
        </div>

        <Link to='/'>Homepage</Link>
        <Link to='/login'>Loginpage</Link>
        <Link to='/moviesshows'>Movies&Shows</Link>
        <Link to='/subscription'>Subscription</Link>
        <Link to='/support'>Support</Link>

        <div className="icons">
            
        </div>
    </div>
  )
}

export default Header
