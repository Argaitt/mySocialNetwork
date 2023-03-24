import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    captchaTxt: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case GET_CAPTCHA_URL:
            return  {...state, captchaUrl: action.captchaUrl}
        default:
            return state
    }
}

export const setUserAuthData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl})

export const getAuthDataThunkCreator = () =>
    (dispatch) =>
        authAPI.getAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserAuthData(id, email, login, true))
            }
        })

export const login = (email, password, rememberMe, captchaTxt) => async (dispatch) => {
    let responce = await authAPI.login(email, password, rememberMe, captchaTxt)
    console.log(responce)
    if (responce.resultCode === 0) {
        dispatch(getAuthDataThunkCreator())
    } else if (responce.resultCode === 10) {
        authAPI.getCaptcha().then(data => dispatch(setCaptchaUrl(data.url)))
    } else {
        dispatch(stopSubmit('login', {_error: responce.messages}))
    }
}

export  const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
        if (response.resultCode === 0){
            dispatch(setUserAuthData(null, null, null, false))
        }
}
export default authReducer