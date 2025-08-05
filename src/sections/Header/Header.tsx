import { Link, useLocation } from "react-router-dom"
import MyIcon from './../../components/MyIcon'
import MyBell from "./../../components/MyBell"
import MyLogo from "./../../components/MyLogo"
import s from './Header.module.scss'

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path ? s.active : '';
  }

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
          className={getLinkClass('/')}
        >Homepage</Link>
        <Link to='/moviesshows' className={getLinkClass('/moviesshows')}>Movies&Shows</Link>
        <Link to='/support' className={getLinkClass('/support')}>Support</Link>
        <Link to='/subscription' className={getLinkClass('/subscription')}>Subscription</Link>
        <Link to='/login' className={getLinkClass('/login')}>Login</Link>
      </div>

      <div className={s.icons}>
        <MyIcon/>
        <MyBell/>
      </div>
    </div>
  )
}

export default Header