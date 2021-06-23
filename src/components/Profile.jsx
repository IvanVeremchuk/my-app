import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            IMAGE
        </div>
        <div>
            ava+ description
        </div>
        <div className={s.post}>
            My post
            <div className={s.item}>
                New post
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;