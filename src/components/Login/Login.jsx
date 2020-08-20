import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../forms/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


const maxLength =  maxLengthCreator(50)
const LoginForm =({handleSubmit, errors})=> {
    return (
        <React.Fragment>
            <form onSubmit={ handleSubmit }>
                <div><Field name={'email'} placeholder={"login"} component={Input} validate={[required, maxLength]}/></div>
                <div><Field name={'password'} type={"password"} placeholder={"password"} component={Input} validate={[required, maxLength]}/></div>
                <div><Field name={'rememberMe'} type={"checkbox"} component={Input}/>remember me</div>
                {
                    errors && <div>
                        {errors}
                    </div>
                }
                <button>Sign up</button>
            </form>
        </React.Fragment>
    )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login =({login, isAuth})=> {
    const onSubmit =(formData)=> {
        login(formData.email, formData.password, formData.rememberMe)
    };
    if (isAuth) {
        return <Redirect to={"/infoblock/:userId"}/>
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
};
const mapStateToProps =(state)=> ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);