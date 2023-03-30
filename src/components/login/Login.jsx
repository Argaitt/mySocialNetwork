import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../FromsControlls/FormsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import classes from "../FromsControlls/FromsControlls.module.css";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email',[requiredField],'email', Input, {type: 'text'})}
        {createField('password',[requiredField],'password', Input, {type:'password'})}
        {createField(null,null,'rememberMe', Input, {type:'checkbox'})}
        <div>
            <button>Sign in</button>
        </div>
        {error ? <div className={classes.formSummaryError}>{error}</div> : undefined}
        {captchaUrl === null ? undefined : <div>
            <div><img src={captchaUrl} alt="no captcha"/></div>
            {createField(null,null,'captchaTxt', 'input', {type:'text'})}
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