import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={'${s.item} ${s.active}'}>
                <NavLink to="/Profile" activeClassName={s.activeLink} >Profile</NavLink> 
            </div> 
            <div className={'${s.item} ${s.active}'}>
                <NavLink to="/Dialogs" activeClassName={s.activeLink} >Dialogs</NavLink>
            </div>
            <div className={'${s.item} ${s.active}'}>
                <NavLink to="/News" activeClassName={s.activeLink} >News</NavLink>
            </div>
            <div className={'${s.item} ${s.active}'}>
                <NavLink to="/Music" activeClassName={s.activeLink} >Music</NavLink>
            </div>
            <div className={'${s.item} ${s.active}'}>
                <NavLink to="/Settings" activeClassName={s.activeLink} >Settings</NavLink>
            </div>
        </nav>
    )
}
//NAVLINK(changing url)

export default Navbar;