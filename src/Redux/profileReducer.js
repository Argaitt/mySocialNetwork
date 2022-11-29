const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initialState = {
    myPostsData : [
        {id:1, messages: 'Hi, how are u?', likesCount: 2},
        {id:2, messages: 'Nice acc', likesCount: 12},
        {id:3, messages: 'Just in time', likesCount: 0},
    ],
        newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {

    const addPost = () => {
        let newPost = {
            id: 5,
            messages: state.newPostText,
            likesCount: 0
        };
        state.myPostsData.push(newPost);
        state.newPostText = "";
    }

    const updateNewPostText = (newText) => {
        state.newPostText = newText;
    }

    switch (action.type) {
        case ADD_POST:
            addPost();
            return state;
        case UPDATE_NEW_TEXT_POST:
            updateNewPostText(action.newText);
            return state;
        default:
            return state;
    };
}
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default profileReducer;