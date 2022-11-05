import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    let posts = props.myPostsData.map(post => <Post message={post.messages} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();

    return(
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
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