import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';

        //rendering in MyPostContainer

const Profile = (props) => {

        return (
                <div>
                        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.UpdateStatus} />
                        <MyPostsContainer  /> 
                </div>
    )
}

export default Profile;