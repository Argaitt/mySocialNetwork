import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FromsControlls/FromsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate, redirect} from "react-router-dom";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField]} name='email' type="text" placeholder='email' component={Input}/>
        </div>
        <div>
            <Field validate={[requiredField]} name='password' type="password" placeholder='password' component={Input}/>
        </div>
        <div>
            <Field name='rememberMe' type="checkbox" component={Input}/> remember me
        </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm( {form: 'login'} )(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Navigate to={'/profile'}/>
    } else {
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {props.captchaUrl === null ? undefined : <img src={props.captchaUrl} alt="no captcha"/>}
        </div>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthб,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)