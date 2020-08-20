import React from 'react'
import s from './FormsControls.module.css'


const FormControl =({input, meta: {touched, error}, children})=> {
    const hasError = touched && error
    return (
        <div className={s.formControls + " " + (hasError ? s.error : "")}>
            {children}
            {hasError && <div><span>{error}</span></div>}
        </div>
    )
}

export const Textarea =(props)=> {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input =(props)=> {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}