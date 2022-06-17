import App from "./components/App";
import ReactDOM from "react-dom";
import React from "react";
import "bootswatch/dist/materia/bootstrap.min.css";
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-MKHJ38Q'
}
 
TagManager.initialize(tagManagerArgs)
// Disable all console messages in production
     console.log = function () {};
     console.error = function () {};
     console.exception = function () {};
     console.warn = function () {};

ReactDOM.render(<App />, document.getElementById("app"));

//This actual template, the html file is in frontend/static/frontend
