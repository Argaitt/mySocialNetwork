import {getAuthDataThunkCreator} from "./authReducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promises = [dispatch(getAuthDataThunkCreator())]
    Promise.all(promises).then(() => {
            dispatch(initializingSuccess())
        }
    )
}

export default appReducer