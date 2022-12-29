import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../FromsControlls/FromsControlls";

const maxLength10 = maxLengthCreator(10)

const AddNewMyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField, maxLength10]} name='message' type='text' placeholder='type...' component={TextArea}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>

    </form>
}

const AddNewMyPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewMyPostForm)

export default AddNewMyPostReduxForm