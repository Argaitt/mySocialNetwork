import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddNewMyPostReduxForm from "./AddNewMyPostReduxForm";

const MyPosts = React.memo((props) => {
    let posts = props.myPostsData.map(post => <Post key={post.id} message={post.messages}
                                                    likesCount={post.likesCount}/>)
    console.log('render test')
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewMyPostReduxForm onSubmit={props.addPost}/>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
})

export default  MyPosts;


