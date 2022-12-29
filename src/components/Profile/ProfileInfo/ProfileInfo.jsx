import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div>
                {/*<img className={classes.profileWallImage} alt="no img" src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    <div>
                        <h2>{props.profile.fullName}</h2>
                    </div>
                    <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
                    <div>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                    <div>
                        <p>Looking job: {props.profile.lookingForAJob === true ? `Yes` : `No`}</p>
                        <p>Skills: {props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default  ProfileInfo;