import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollowThunkCreator
} from "../../Redux/userReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetchingStatus,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps = {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : undefined}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   users={this.props.users} followThunkCreator={this.props.followThunkCreator} unfollowThunkCreator={this.props.unfollowThunkCreator}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress} followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)
