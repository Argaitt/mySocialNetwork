import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            <div>
                <button>Send</button>
            </div>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm)

export default AddMessageReduxForm