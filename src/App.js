import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Email from './components/Email/Email';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const  App =(props)=> {

  return (

      <div className="App">
        <Header/>
        <Sidebar store={props.store} />
        <div className="App-wrapper-content">
          <Route exact path="/Dialogs" render={ () => <DialogsContainer />} />
          <Route exact path="/Content" render={ () => <Content />}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Email" component={Email}/>
        </div>
      </div>
  )
};

export default App;