import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='login' type="text" placeholder='login' component='input'/>
        </div>
        <div>
            <Field name='password' type="text" placeholder='password' component='input'/>
        </div>
        <div>
            <Field name='rememberMe' type="checkbox" component='input'/> remember me
        </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm( {form: 'login'} )(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login