import React from 'react'
import s from './FormsControls.module.css'


const FormControl =({input, meta, child, ...props})=> {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControls + " " + (hasError ? s.error : "")}>
            {props.children}
            {hasError && <div><span>{meta.error}</span></div>}
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