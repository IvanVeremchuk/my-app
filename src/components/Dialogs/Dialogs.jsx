import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/3">Olexandr</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/4">Viktor</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/5">Valery</NavLink>
                </div>
                <div>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How is your it-lamasutra?</div>
                <div className={s.massage}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;