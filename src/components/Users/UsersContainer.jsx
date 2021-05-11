import {connect} from "react-redux";
import {
    followAC, setCurrentPageAC,
    setUsersAC, setUsersCountAC, toggleLoadingAC,
    unfollowAC
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import avatar from "../../resources/images/user-avatar.png";
import Users from "./Users";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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

    render() {
        return (
            <>
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    followClick={this.props.follow}
                    unfollowClick={this.props.unfollow}
                    pageNumberChanger={this.pageNumberChanger}
                    isLoading={this.props.isLoading }
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
let mapDispatchToProps = (dispatch) => {
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
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)


