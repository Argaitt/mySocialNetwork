import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthDataThunkCreator, setUserAuthData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthDataThunkCreator()
    }

    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapStateToProps,{setUserAuthData, getAuthDataThunkCreator})(HeaderContainer);