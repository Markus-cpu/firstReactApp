import React from 'react'
import s from './FormsControls.module.css'

export const Textarea =({input, meta, ...props})=> {
    return (
        <>
            <textarea {...input} {...props} />
        </>

    )
}