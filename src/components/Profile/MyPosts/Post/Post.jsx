import s from './Post.module.css';

const Post = (props) => {

    console.log(props.massage);

    return <div className={s.item}>
        <div>
            POST
        </div>
                <img scr='https://upload.wikimedia.org/wikipedia/uk/9/99/Ava_poster.jpeg' />
                    { props.message } (POST)
                <div>
                    { props.like } (Likes)
                </div>
            </div>
}

export default Post;