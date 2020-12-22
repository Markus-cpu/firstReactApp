import React from 'react'
import s from './FormsControls.module.css'
import { FieldValidatorType } from '../../utils/validators/validators'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    // children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error
    return (
        <div className={s.formControls + " " + (hasError ? s.error : "")}>
            {children}
            {hasError && <div><span>{error}</span></div>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField<FormTypeKeys> (
    placeholder: string | null,
    name: FormTypeKeys,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {},
    text = '') {
    return (
        <>
            <Field
                placeholder={placeholder}
                name={name}
                validators={validators}
                component={component}
                {...props}
            />
            {text}
        </>
    )
}