import React from "react";
import classes from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/219986.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, followThunkCreator, unfollowThunkCreator }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} followThunkCreator={followThunkCreator}
                                     unfollowThunkCreator={unfollowThunkCreator}/>)}
        </div>
    )
}

export default Users;