import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Store";

const MyPosts = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text =newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    let posts = props.myPostsData.map(post => <Post message={post.messages} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();

    return(
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {posts}
                </div>
            </div>
    )
}
export default  MyPosts;