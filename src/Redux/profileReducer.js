import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    myPostsData : [
        {id:1, messages: 'Hi, how are u?', likesCount: 2},
        {id:2, messages: 'Nice acc', likesCount: 12},
        {id:3, messages: 'Just in time', likesCount: 0},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                myPostsData: [...state.myPostsData, { id: state.myPostsData.length + 1, messages: action.message, likesCount: 0}],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    };
}
//action creators
export const addPost = (messageData) => ({type: ADD_POST, message: messageData.message});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfileThunkCreator = (userId, authMeUserId) => {
    return (dispatch) => {
        let localUserId
        userId ? localUserId = userId : localUserId = authMeUserId
        usersAPI.getUserProfile(localUserId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

//Thunks
export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode ===0) dispatch(setStatus(status))
        })
    }
}

export default profileReducer;