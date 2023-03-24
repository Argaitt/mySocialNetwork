import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

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
        case  DELETE_POST:
            return  {...state, myPostsData: state.myPostsData.filter(p => p.id !== action.postId)}
        default:
            return state;
    };
}
//action creators
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const addPost = (messageData) => ({type: ADD_POST, message: messageData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfileThunkCreator = (userId, authMeUserId) => {
    return async (dispatch) => {
        let localUserId
        userId ? localUserId = userId : localUserId = authMeUserId
        let response = await usersAPI.getUserProfile(localUserId)
        dispatch(setUserProfile(response));
    }
}

//Thunks
export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        if (userId !== undefined){
            let responce = await profileAPI.getStatus(userId)
            dispatch(setStatus(responce));
        }
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let responce = await profileAPI.updateStatus(status)
        if (responce.resultCode ===0) dispatch(setStatus(status))
    }
}

export default profileReducer;