import React from "react";
import Myposts from "./Myposts";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        },

        addPost: () => {
            dispatch(addPostCreator());
        },

    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default ProfileContainer;







