import App from "./components/App";
import ReactDOM from "react-dom";
import React from "react";
import "bootswatch/dist/materia/bootstrap.min.css";
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme'

// Disable all console messages in production
// console.log = function () { };
// console.error = function () { };
// console.exception = function () { };
// console.warn = function () { };

const config = {
     initialColorMode: 'light',
     useSystemColorMode: false,
}

const myTheme = extendTheme(
     config,
     theme,
)


ReactDOM.render(
     <ChakraProvider theme={myTheme}>
          <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
          <App />
     </ChakraProvider>,
     document.getElementById("app"));
