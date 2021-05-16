import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';



class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) userID = 1;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(r => {
                this.props.setUserProfile(r.data)
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