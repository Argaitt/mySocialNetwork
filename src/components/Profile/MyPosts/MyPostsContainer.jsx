import {addPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        myPostsData: state.profilePage.myPostsData,
    }
}

let mapDispatchToProps = {
    addPost
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default  MyPostsContainer;