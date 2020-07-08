import React from 'react';
import Contact from './Contact';
import {connect} from "react-redux";

let mapStateToProps =(state)=> {
    return {
        contact: state.contactPage
    }
};


let contactContainer = connect(mapStateToProps)(Contact);
export default contactContainer;