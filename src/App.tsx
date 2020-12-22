import React, {Component, Suspense, lazy} from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import {compose} from 'redux'
import {connect, Provider} from 'react-redux'
import {initializeApp} from './Redux/app-reducer'
import Preloader from './components/Preloader/Preloader'
import store from './Redux/redux-store'
import ErrorBoundary from './components/commonComponents/ErrorBoundary'

//Ленивая загрузка компонент
const DialogsContainer = lazy(()=> import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(()=> import('./components/Users/UsersContainer'))
const ContactContainer = lazy(()=> import("./components/Contact/ContactContainer"))
const InfoblockContainer = lazy(()=> import("./components/Infoblock/InfoblockContainer"))
const Login = lazy(()=> import("./components/Login/Login"))
const Email = lazy(()=> import('./components/Email/Email'))

class App extends Component {
    componentDidMount = () => {
        this.props.initializeApp();//инициализация приложения
    }
    render() {
        if(this.props.initialized === true) {
            return <Preloader />
        }
        return (
                    <div className="App">
                       <HeaderContainer/>
                       <Sidebar store={this.props.store}/>
                       <div className="App-wrapper-content">
                           <Route path="/Home" render={() => <Home/>}/>
                           <Suspense fallback={<div>Loading.....</div>}>
                                <Switch>
                                     <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                                     <Route path='/infoblock/:userId' render={() => <InfoblockContainer/>}/>
                                     <Route path="/Contact" render={() => <ContactContainer/>}/>
                                     <Route path="/Email" render={() => <Email/>}/>
                                     <ErrorBoundary>
                                          <Route path="/Users" render={() => <UsersContainer pageTitle={"Black Metal"}/>}/>
                                          <Route path="/login" render={() => <Login/>}/>
                                     </ErrorBoundary>
                                </Switch>
                           </Suspense>
                       </div>
                    </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MarkusCpuApp =(props)=> {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
               <AppContainer store={store}/>
            </Provider>
        </HashRouter>
    )
}

export default MarkusCpuApp