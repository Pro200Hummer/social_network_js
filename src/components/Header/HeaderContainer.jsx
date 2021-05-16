import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthData} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(r => {
            let userData = r.data.data
            this.props.setAuthData(userData.id, userData.login, userData.email)
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.userData
    }
}

const actions = {
    setAuthData,
}


export default connect(mapStateToProps, actions)(HeaderContainer);