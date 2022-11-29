import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    //TODO framework trying replace "map" to "for..in"
    let posts = props.posts.map(post => <Post key={post.id}  message={post.messages} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();
    return(
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={() => props.updateNewPostText(newPostElement.current.value)} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {posts}
                </div>
            </div>
    )
}
export default  MyPosts;


