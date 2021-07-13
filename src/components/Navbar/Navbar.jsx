import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div>
            NAVBAR
        </div>
        <div className={s.item}>
            <a>navbar1</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar2</a>
        </div>
        <div className={s.item}>
            <a>navbar3</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar4</a>
        </div>
        <div className={s.item}>
            <a>navbar5</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar6</a>
        </div>
        <div className={s.item}>
            <a>navbar6</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar6</a>
        </div>
        <div className={s.item}>
            <a>navbar6</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar6</a>
        </div>
        <div className={s.item}>
            <a>navbar6</a>
        </div>
        <div className={'${s.item} ${s.active}'}>
            <a>navbar6</a>
        </div>
    </nav>
}

export default Navbar;