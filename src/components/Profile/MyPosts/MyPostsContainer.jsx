import React from 'react';
import {newPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addNewPost: () => {
            dispatch(newPostCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;