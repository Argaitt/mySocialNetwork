import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setUserAuthData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getAuthDataThunkCreator = () =>{
    return (dispatch) => {
        authAPI.getAuthData().then(data => {
            if (data.resultCode === 0){
                let {id, login, email} = data.data
                dispatch(setUserAuthData(id, email, login, true))
            }
        })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0 ) {
            let {id, login, email} = data.data
            dispatch(getAuthDataThunkCreator())
        }
    })
}

export  const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0){
            dispatch(setUserAuthData(null, null, null, false))
        }
    })
}
export default authReducer