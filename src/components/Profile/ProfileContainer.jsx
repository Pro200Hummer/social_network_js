import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/14`)
            .then(r => {
                debugger
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

export default connect(mapStateToProps, actionCreators)(ProfileAPIContainer)