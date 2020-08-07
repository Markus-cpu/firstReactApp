import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Email from './components/Email/Email';
import UsersContainer from './components/Users/UsersContainer';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import InfoblockContainer from "./components/Infoblock/InfoblockContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuth} from "./Redux/auth-reducer";


class App extends Component {
    componentDidMount = () => {
        this.props.getAuth();
    };
    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <Sidebar store={this.props.store}/>
                <div className="App-wrapper-content">
                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path='/infoblock/:userId' render={() => <InfoblockContainer/>}/>
                    <Route path="/Home" render={() => <Home/>}/>
                    <Route path="/Contact" render={() => <ContactContainer/>}/>
                    <Route path="/Email" render={() => <Email/>}/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

export default compose(
    withRouter,
    connect(null, {getAuth}),

)(App);