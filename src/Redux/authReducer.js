import {authAPI} from "../api/api";

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
export const login = (email, password, rememberMe, captchaTxt) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captchaTxt).then(data => {
        console.log(data)
        if (data.resultCode === 0 ) {
            let {id, login, email} = data.data
            dispatch(getAuthDataThunkCreator())
        } else if (data.resultCode === 10){
            authAPI.getCaptcha().then(data => dispatch(setCaptchaUrl(data.url)))
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