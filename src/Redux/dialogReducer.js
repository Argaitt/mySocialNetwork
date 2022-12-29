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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length++, messages: action.newMessageBody}]
            };
        default:
            return state;
    }
}

export const  sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogReducer;
