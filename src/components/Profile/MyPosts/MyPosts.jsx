import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let PostsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]


    return <div className={s.postsBlock}>
                <div>
                    MY POSTS
                    <div>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                        <button>Remove</button>
                    </div>
                    <div className={s.posts}>
                        <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount} />
                        <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount} />
                    </div>
                </div>
            </div>
}

export default MyPosts;