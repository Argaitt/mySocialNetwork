import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Redux/StoreContext";

const MyPostsContainer = (props) => {

    return(
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) =>{
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (
                    <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                             posts={state.profilePage.myPostsData} newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default  MyPostsContainer;