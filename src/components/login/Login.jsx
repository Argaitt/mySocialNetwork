import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FromsControlls/FromsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";

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
        {props.captchaUrl === null ? undefined : <div>
            <div><img src={props.captchaUrl} alt="no captcha"/></div>
            <div><Field name='captchaTxt' type='text' component='input'></Field></div>
        </div>}
    </form>
}

const LoginReduxForm = reduxForm( {form: 'login'} )(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaTxt)
    }
    if (props.isAuth){
        return <Navigate to={'/profile'}/>
    } else {
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)