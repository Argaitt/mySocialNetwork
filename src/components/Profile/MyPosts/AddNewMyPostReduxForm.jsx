import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../FromsControlls/FormsControlls";

const maxLength30 = maxLengthCreator(30)

const AddNewMyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField, maxLength30]}  name='message' type='text' placeholder='type...' component={TextArea}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>

    </form>
}

const AddNewMyPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewMyPostForm)

export default AddNewMyPostReduxForm