import {sendMessage} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
import dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "@reduxjs/toolkit";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    sendMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(dialogs)