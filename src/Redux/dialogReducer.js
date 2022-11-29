const UPDATE_NEW_MESSAGE_POST = 'UPDATE-NEW-MESSAGE-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogReducer = (state = initialState, action ) => {

    const updateNewMessageText = (newMessageText) => {
        state.newMessageText = newMessageText;
    };

    const sendMessage = () => {
        let text = state.newMessageText;
        state.newMessageText = '';
        //TODO: check sideEffects
        state.messagesData.push({id: state.messagesData.length++, messages: text});
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_POST:
            updateNewMessageText(action.messageText)
            return state;
        case SEND_MESSAGE:
            sendMessage();
            return state;
        default:
            return state;
    }
}

export const  sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const  updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_POST, messageText: text})
export default dialogReducer;
