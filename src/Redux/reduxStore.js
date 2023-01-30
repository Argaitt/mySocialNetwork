import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import funReducer from "./funReducer";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer} from "redux-form";
import appReducer from "./appReduce";

//TODO: rewrite with redux toolkit
let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    funspacePage: funReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: reducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//TODO: for debugging will delete after develop
window.store = store
export default store;
