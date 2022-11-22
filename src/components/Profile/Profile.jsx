import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText}
                     myPostsData={props.profilePage.myPostsData}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default  Profile;