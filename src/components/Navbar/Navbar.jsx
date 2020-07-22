import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from '../Navbar/Friends/Friends'

const Navbar = (props) => {

  let friends = props.state.map( (f) => <Friends id={f.id} name={f.name}/> );

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.friends}>
        <h2 className={s.myfr}>My Friends</h2>
        {friends}

        {/*<Friends />
        <Friends />
        <Friends />*/}
      </div>
    </nav>
  )
}

export default Navbar;