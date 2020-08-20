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
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {
    componentDidMount = () => {
        this.props.initializeApp();//инициализация приложения
    };
    render() {
        if(this.props.initialized === true) {
            return <Preloader />
        }
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
const mapStateToProps = (state)=> ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);