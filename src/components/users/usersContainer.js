import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;