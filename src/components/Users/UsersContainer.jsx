import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setUsers, setUsersCount, toggleLoading,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import avatar from "../../resources/images/user-avatar.png";
import Users from "./Users";
import {usersAPI} from "../../api/users-api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(r => {
                this.props.toggleLoading(false);
                this.props.setUsers(r.data.items.map(i => {
                    if (i.photos.small === null) {
                        return {...i, photos: {...i.photos, small: avatar}}
                    }
                    return i
                }));
                this.props.setUsersCount(r.data.totalCount);
            })
    }

    pageNumberChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleLoading(true);
        usersAPI.pageNumberChanger(pageNumber, this.props.pageSize)
            .then(r => {
                this.props.toggleLoading(false);
                this.props.setUsers(r.data.items.map(i => {
                    if (i.photos.small === null) {
                        return {...i, photos: {...i.photos, small: avatar}}
                    }
                    return i
                }));
            })
    }

    followingChanger = (userID, trigger) => {
        if(trigger === "follow"){
            usersAPI.followUser(userID)
                .then(res => {
                    if(res.data.resultCode === 0){
                        this.props.follow(userID)
                    }
                    if(res.data.resultCode === 1){
                        alert(res.data.messages[0])
                    }
                })
        }
        if(trigger === "unfollow"){
            usersAPI.unfollowUser(userID)
                .then(res => {
                    if(res.data.resultCode === 0){
                        this.props.unfollow(userID)
                    }
                    if(res.data.resultCode === 1){
                        alert(res.data.messages[0])
                    }
                })
        }
    }

    render() {
        return (
            <>
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    followingChanger={this.followingChanger}
                    pageNumberChanger={this.pageNumberChanger}
                    isLoading={this.props.isLoading}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

const actionCreators = {
    follow,
    unfollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    toggleLoading,
}

export default connect(mapStateToProps, actionCreators)(UsersContainer)

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toggleLoading: (isLoading) => {
            dispatch(toggleLoadingAC(isLoading))
        }

    }
}*/
