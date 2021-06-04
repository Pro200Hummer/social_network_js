import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {profileAPI} from "../../api/social-network-api";



class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) userID = 1;
        profileAPI.getUser(userID)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const actionCreators = {
    setUserProfile
}

export default connect(mapStateToProps, actionCreators)(withRouter(ProfileAPIContainer));