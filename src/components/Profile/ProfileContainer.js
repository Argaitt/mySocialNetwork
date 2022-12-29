import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserProfile,
    updateUserStatusThunkCreator
} from "../../Redux/profileReducer";
import {withRouter} from "../../sys/withRouter";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "@reduxjs/toolkit";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getUserProfileThunkCreator(this.props.router.params.userid, this.props.userId)
        this.props.getUserStatusThunkCreator(this.props.router.params.userid)
    }
    componentDidUpdate() {
        if (!this.props.profile)
            this.props.getUserProfileThunkCreator(this.props.router.params.userid, this.props.userId)
        if (!this.props.status)
            this.props.getUserStatusThunkCreator(this.props.userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login/'/>
        return(
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateUserStatusThunkCreator}/>
        )
    }
}

let mapStateToProps = (state) => {return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
}}

export default compose(
    connect(mapStateToProps,{setUserProfile, getUserProfileThunkCreator, getUserStatusThunkCreator,
        updateUserStatusThunkCreator}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
