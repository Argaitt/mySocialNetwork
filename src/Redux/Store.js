// this is study store, for understanding redux store structure
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import funReducer from "./funReducer";

let store = {
    profilePage : {
        myPostsData : [
            {id:1, messages: 'Hi, how are u?', likesCount: 2},
            {id:2, messages: 'Nice acc', likesCount: 12},
            {id:3, messages: 'Just in time', likesCount: 0},
        ],
        newPostText: 'it-kamasutra'
    },
    dialogPage : {
        dialogsData : [
            {id:1, name: 'Dmitry'},
            {id:2, name: 'Alexander'},
            {id:3, name: 'Svetlana'},
            {id:4, name: 'Michael'},
            {id:5, name: 'Alexey'},
            {id:6, name: 'Timofei'},
        ],
        messagesData : [
            {id: 1, messages: 'Hi, how are you?'},
            {id: 2, messages: 'Yo, dude'},
            {id: 3, messages: 'Hello dear!'},
            {id: 4, messages: 'Nice to meet you!'},
            {id: 5, messages: 'let go to party!'},
            {id: 6, messages: 'just calm down;)'},
        ],
        newMessageText: 'it-kamasutra'
    },
    funspacePage: {
        result: ''
    },
    //service methods
    _observer(state){console.log('empty observer')},
    subscribe(observer){
        this._observer = observer;
    },

    dispatch(action){
        this.profilePage = profileReducer(action, this.profilePage);
        this.dialogPage = dialogReducer(action, this.dialogPage);
        this.funspacePage = funReducer(action, this.funspacePage);
        this._observer(store);
    },
}
export default store;
