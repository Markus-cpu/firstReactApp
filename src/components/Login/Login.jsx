import React from "react";
import {reduxForm} from "redux-form";

const LoginForm =(props)=> {
    return (
        <>
            <form>
                <div><input placeholder={"login"}/></div>
                <div><input placeholder={"password"}/></div>
                <div><input type={"checkbox"}/>remember me</div>
                <button>Sign up</button>
            </form>
        </>
    )
};
const loginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login =(props)=> {
    return (
        <>
            <loginReduxForm />
        </>
    )
};
export default Login;