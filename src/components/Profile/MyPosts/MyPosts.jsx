import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from 'yargs';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>;
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return ( 
        <div className={s.postsBlock}>
                    <h3>MY POSTS</h3>
                    <AddNewPostFormRedux onSubmit={onAddPost} />
                    <div className={s.posts}>
                        { postsElements}
                    </div>
                </div>
    )
}

export default MyPosts;