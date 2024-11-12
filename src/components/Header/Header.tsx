import { Link } from "react-router-dom"
import MyIcon from '../MyIcon'
import MyBell from "../MyBell"
import s from './Header.module.css'
import MyLogo from "../MyLogo"

const Header = () => {
  return (
    <div className={s.navbar}>
      <Link 
        to='/'
        className={s.logo}
      >
        <MyLogo/>
      </Link>

      <div className={s.menu}>
        <Link 
          to='/'
          className={s.active}
        >Homepage</Link>
        <Link to='/login'></Link>
        <Link to='/moviesshows'>Movies&Shows</Link>
        <Link to='/support'>Support</Link>
        <Link to='/subscription'>Subscription</Link>
      </div>

      <div className={s.icons}>
        <MyIcon/>
        <MyBell/>
      </div>
    </div>
  )
}

export default Header