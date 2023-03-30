import React from "react";
import classes from "./FromsControlls.module.css";
import {requiredField} from "../../utils/validators/validators";
import {Field} from "redux-form";
//TODO: if error is 'maxlength' then except meta.touch condition

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return(
        <div className={classes.formControlL + ' ' +(hasError ? classes.error : undefined)}>
            {props.children}
            <div>
                {hasError ? <span>{meta.error}</span> : undefined}
            </div>
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}

export const createField = (placeholder, validators, name, component, props = {}, text = '') => <div>
    <Field
        validate={validators}
        name={name}
        placeholder={placeholder}
        component={component}
        {...props}
    /> {text}
</div>
