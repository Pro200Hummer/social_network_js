import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthInfoTC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthInfoTC()
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
    getAuthInfoTC,
}


export default connect(mapStateToProps, actions)(HeaderContainer);