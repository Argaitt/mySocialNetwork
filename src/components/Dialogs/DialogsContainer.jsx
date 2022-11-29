import React  from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Redux/StoreContext";
const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let dialogItemsData = state.dialogPage.dialogsData
                    .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/>);
                let messagesItemsData = state.dialogPage.messagesData
                    .map(messageData => <Message message={messageData.messages}/>);

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageTextActionCreator(body));
                };
                return (

                    <Dialogs dialogItemsData={dialogItemsData} messagesItemsData={messagesItemsData}
                             onSendMessageClick={onSendMessageClick} onNewMessagesChange={onNewMessageChange}
                             newMessageText={state.dialogPage.newMessageText}/>

                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;