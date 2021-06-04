import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/auth-reducer";
import {headerApi} from "../../api/social-network-api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        headerApi.getAuthInfo()
            .then(userData => {
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