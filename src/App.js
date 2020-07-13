import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Email from './components/Email/Email';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import InfoblockContainer from "./components/Infoblock/InfoblockContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (

        <div className="App">
            <HeaderContainer />
            <Sidebar store={props.store}/>
            <div className="App-wrapper-content">
                <Route  path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route  path='/infoblock/:userId' render={() => <InfoblockContainer />}/>
                <Route  path="/Home" render={()=> <Home/>}/>
                <Route  path="/Contact" render={()=> <ContactContainer/>}/>
                <Route  path="/Email" render={()=> <Email/>}/>
                <Route  path="/Users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
};

export default App;