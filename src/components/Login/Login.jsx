import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm =(props)=> {
    const { handleSubmit } = props;
    debugger;
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div><Field name={'login'} placeholder={"login"} component={'input'}/></div>
                <div><Field name={'password'} placeholder={"password"} component={'input'}/></div>
                <div><Field name={'rememberMe'} type={"checkbox"} component={'input'}/>remember me</div>
                <button>Sign up</button>
            </form>
        </>
    )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login =(props)=> {
    const onSubmit =(formData)=> {
        console.log(formData);
    };
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
};
export default Login;