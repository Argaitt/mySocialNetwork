const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const UPDATE_NEW_MESSAGE_POST = 'UPDATE-NEW-MESSAGE-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHECK_BRACKET = 'CHECK-BRACKET';

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

    //functional methods
    _checkBrackets(str){
        let stack = [];
        if (str.length === 0) {
            this.funspacePage.result = '';
            this._observer(store);
            return 0;
        }
        for (let i = 0; i < str.length; i++){
            if (str[i] === '('){
                stack.push(str[i]);
                continue
            }else if (str[i] === ')')
            {
                if(stack.pop() === undefined){
                    this.funspacePage.result = false.toString();
                    this._observer(store);
                    return 0;
                };
            }
        }
        stack.length === 0 ? this.funspacePage.result = true.toString() : this.funspacePage.result = false.toString();
        this._observer(store);
    },
    _addPost(){
        let newPost = {
            id: 5,
            messages: store.profilePage.newPostText,
            likesCount: 0
        };
        store.profilePage.myPostsData.push(newPost);
        store.profilePage.newPostText = "";
        this._observer(store);
    },
    _updateNewPostText(newText){
        store.profilePage.newPostText = newText;
        this._observer(store);
    },

    _updateNewMessageText(newMessageText){
        this.dialogPage.newMessageText = newMessageText;
        this._observer(store);
    },
    _sendMessage(){
        let text = this.dialogPage.newMessageText;
        this.dialogPage.newMessageText = '';
        //TODO: check sideEffects
        this.dialogPage.messagesData.push({id: this.dialogPage.messagesData.length++, messages: text});
        this._observer(store);
    },
    //dispatch system for functional methods

    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost();
        }else if (action.type === UPDATE_NEW_TEXT_POST){
            this._updateNewPostText(action.newText)
        }else if(action.type === UPDATE_NEW_MESSAGE_POST){
            this._updateNewMessageText(action.messageText)
        }else if(action.type === SEND_MESSAGE){
            this._sendMessage();
        }else if(action.type === CHECK_BRACKET){
            this._checkBrackets(action.str);
        }
    },
}
export default store;

//action creator's for dispatch system
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export const  sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const  updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_POST, messageText: text})

export const  checkBracketActionCreator = (str) => ({type: CHECK_BRACKET, str: str});