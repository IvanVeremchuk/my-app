import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) => { // if profile == null || profile == undefined
    if (!props.profile ) {
        return <Preloader />
    }

    return (
            <div>
                <div>
                    <img scr='https://upload.wikimedia.org/wikipedia/uk/9/99/Ava_poster.jpeg' />
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                    <ProfileStatus status={props.status} updateStatus ={props.updateStatus}/>
                </div>
            </div>
    )
}

export default ProfileInfo;