import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return(
            <div className={classes.item}>
                {props.message}
                <div className={classes.like}>
                    {`likes: ${props.likesCount}`}
                </div>
            </div>

    )
}
export default  Post;