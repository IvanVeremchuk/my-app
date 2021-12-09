import {addPostActionCreator, getUserProfile, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

//wrapper for profile

const mapStateToProps = (state) => {
        return {
                posts: state.profilePage.post,
                newPostText: state.profilePage.newPostText      //MyPosts
        }
}

const mapDispatchToProps = (dispatch) => {
        return {
                updateNewPostText: (text) => {
                        let action = updateNewPostTextActionCreator(text);      //act1on - object that have svoistvo .type
                        dispatch(action);
                },
                addText: () => {
                        dispatch(addPostActionCreator());
                }
        }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts); //MyPosts rerender when POSTS massive will changed/ new posts aded

export default MyPostsContainer; 