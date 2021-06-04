import {connect} from "react-redux";
import {
    changePageNumberTC, followingTC, getUsersTC, unfollowingTC
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    pageNumberChanger = (pageNumber) => {
        this.props.changePageNumberTC(pageNumber, this.props.pageSize)
    }

    followingChanger = (userID, trigger) => {
        if (trigger === "follow") {
            this.props.followingTC(userID)
        }
        if (trigger === "unfollow") {
            this.props.unfollowingTC(userID)
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
                    followingInProgress={this.props.followingInProgress}
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
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const actions = {
    getUsersTC,
    changePageNumberTC,
    followingTC,
    unfollowingTC,
}

export default connect(mapStateToProps, actions)(UsersContainer)

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
