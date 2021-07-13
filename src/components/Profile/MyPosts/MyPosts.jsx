import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return <div>
                <div>
                    MY POSTS
                    <div>
                        <textarea></textarea>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                    <div className={s.posts}>
                        <Post message='Hi, how are you?' like='3 ' />
                        <Post message="It's my first post " like='32 ' />
                    </div>
                </div>
            </div>
}

export default MyPosts;