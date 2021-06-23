import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
        <div className={s.item}>
            <a>gdfdfdgdgd</a>
        </div>
    </nav>
}

export default Navbar;