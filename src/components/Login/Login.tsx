import React from 'react'
import { InjectedFormProps, reduxForm} from 'redux-form'
import {Input, createField} from '../forms/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../Redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../../Redux/redux-store'

// const maxLength =  maxLengthCreator(50)

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean) => void
}
export type LoginFormType = {
    rememberMe: boolean
    password: string | null
    email: string | null
}
type LoginFormTypeKeys = keyof LoginFormType

const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = ({ handleSubmit, error }) => {
    return (
        <React.Fragment>
            <form onSubmit={ handleSubmit }>
                {createField<LoginFormTypeKeys>('Email', 'email', [required], Input)}
                {createField<LoginFormTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
                {createField<LoginFormTypeKeys>(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

                {
                    error && <div>
                        {error}
                    </div>
                }

                <button>Sign up</button>
            </form>
        </React.Fragment>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({ login, isAuth }) => {
    const onSubmit = (formData: LoginFormType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={"/infoblock/:userId"}/>
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType  => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)