import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import funReducer from "./funReducer";
import {combineReducers, legacy_createStore as createStore} from "@reduxjs/toolkit";

//TODO: rewrite with redux toolkit
let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    funspacePage: funReducer
});

const store = createStore(reducers);

export default store;
