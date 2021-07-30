import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div>
                <div>
                <img scr='https://upload.wikimedia.org/wikipedia/uk/9/99/Ava_poster.jpeg' />
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
    )
}

export default ProfileInfo;