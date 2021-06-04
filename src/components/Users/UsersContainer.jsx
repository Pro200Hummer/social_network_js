import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setUsers, setUsersCount, toggleLoading,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import avatar from "../../resources/images/user-avatar.png";
import Users from "./Users";
import {usersApi} from "../../api/social-network-api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleLoading(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleLoading(false);
                this.props.setUsers(data.items.map(i => {
                    if (i.photos.small === null) {
                        return {...i, photos: {...i.photos, small: avatar}}
                    }
                    return i
                }));
                this.props.setUsersCount(data.totalCount);
            })
    }

    pageNumberChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleLoading(true);
        usersApi.pageNumberChanger(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleLoading(false);
                this.props.setUsers(data.items.map(i => {
                    if (i.photos.small === null) {
                        return {...i, photos: {...i.photos, small: avatar}}
                    }
                    return i
                }));
            })
    }

    followingChanger = (userID, trigger) => {
        if(trigger === "follow"){
            usersApi.followUser(userID)
                .then(data => {
                    if(data.resultCode === 0){
                        this.props.follow(userID)
                    }
                    if(data.resultCode === 1){
                        alert(data.messages[0])
                    }
                })
        }
        if(trigger === "unfollow"){
            usersApi.unfollowUser(userID)
                .then(data => {
                    if(data.resultCode === 0){
                        this.props.unfollow(userID)
                    }
                    if(data.resultCode === 1){
                        alert(data.messages[0])
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
