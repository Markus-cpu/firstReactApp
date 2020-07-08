import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Email from './components/Email/Email';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import InfoblockContainer from "./components/Content/Infoblock/InfoblockContainer";


const App = (props) => {

    return (

        <div className="App">
            <Header/>
            <Sidebar store={props.store}/>
            <div className="App-wrapper-content">
                <Route exact path="/Dialogs" render={() => <DialogsContainer/>}/>
                {/*Сейчас у нас в пути(URL) есть параметр userId*/}
                <Route  path='/Infoblock/:userId' render={() => <InfoblockContainer />}/>
                <Route exact path="/Home" render={()=> <Home/>}/>
                <Route exact path="/Contact" render={()=> <ContactContainer/>}/>
                <Route exact path="/Email" render={()=> <Email/>}/>
                <Route exact path="/Users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
};

export default App;