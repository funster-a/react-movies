import { Link } from "react-router-dom"
import MyIcon from './../../components/MyIcon'
import MyBell from "./../../components/MyBell"
import MyLogo from "./../../components/MyLogo"
import s from './Header.module.scss'
import { useState } from "react"

const Header = () => {

  const [isActive, setActive] = useState()

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
        <Link to='/moviesshows'>Movies&Shows</Link>
        <Link to='/support'>Support</Link>
        <Link to='/subscription'>Subscription</Link>
        <Link to='/login'>Login</Link>
      </div>

      <div className={s.icons}>
        <MyIcon/>
        <MyBell/>
      </div>
    </div>
  )
}

export default Header