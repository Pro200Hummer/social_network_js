import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserInfoTC, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';



class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) userID = 1;
        this.props.getUserInfoTC(userID)
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
    getUserInfoTC
}

export default connect(mapStateToProps, actionCreators)(withRouter(ProfileAPIContainer));