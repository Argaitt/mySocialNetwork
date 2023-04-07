import React from "react";
import classes from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/219986.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

const User = ({user, followingInProgress, unfollowThunkCreator, followThunkCreator}) => {
    return (
        <div>
                <span>
                    <div><NavLink to={'/profile/' + user.id}><img className={classes.photo}
                                                                  src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                                                                  alt="no found"/></NavLink></div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowThunkCreator(user.id)
                            }}>Unfollow</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followThunkCreator(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>

                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
            </div>)
}

export default User;