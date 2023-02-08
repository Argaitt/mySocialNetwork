import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddNewMyPostReduxForm from "./AddNewMyPostReduxForm";

class MyPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return JSON.stringify(this.props) != JSON.stringify(nextProps)
    }

    render() {
        let posts = this.props.myPostsData.map(post => <Post key={post.id} message={post.messages}
                                                             likesCount={post.likesCount}/>)
        console.log('render test')
        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <AddNewMyPostReduxForm onSubmit={this.props.addPost}/>
                </div>
                <div className={classes.posts}>
                    {posts}
                </div>
            </div>
        )
    }
}

export default  MyPosts;


