import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return <div className={s.content}>
                <div>
                    PROFILE
                </div>
                <div>
                <img scr='https://upload.wikimedia.org/wikipedia/uk/9/99/Ava_poster.jpeg' />
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
}

export default Profile;